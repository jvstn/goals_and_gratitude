import { Request, Response } from "express";
import { NativeError } from "mongoose";
import { IItem, Item } from "../../models/item";
import { User } from "../../models/user";
import { IUser } from "../../utils/authUtils";
import { startOfDay, endOfDay, isBefore, isAfter } from "date-fns/fp";

export const createGoal = async (req: Request, res: Response) => {
  try {
    console.log("Running goals controller");
    const { text, email } = req.body;
    const goal = await Item.create({ text });
    const user = await User.findOneAndUpdate(
      email,
      {
        $push: { goals: goal },
      },
      { new: true }
    );
    const goals = user.goals;
    res.json(goals);
  } catch (err) {
    console.log(err);
  }
};

export const readGoals = async (req: Request, res: Response) => {
  try {
    const date = new Date();
    const { email } = req.body;

    const user = await User.findOne({ email });

    const goalsForTheDay = user.goals.filter(
      (goal) =>
        isBefore(goal.createdAt, startOfDay(date)) && isAfter(endOfDay(date))
    );

    res.status(200).json(goalsForTheDay);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong. Please try again later");
  }
};
