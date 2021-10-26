import { Request, Response } from "express";
import { Item } from "../../models/item";
import { User } from "../../models/user";
import { startOfDay, endOfDay, isBefore, isAfter } from "date-fns/fp";

export const createGoal = async (req: Request, res: Response) => {
  try {
    console.log("Running goals controller");
    const { text } = req.body;
    const goal = await Item.create({ text });
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
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
    const requestDate = req.query.date as string;
    const date = new Date(requestDate);
    const user = await User.findOne({ email: req.user.email });
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

// export const updateGoal =  (req: Request, res: Response) => {
//   try {
//     const { _id, text } = req.body;
//     const user = await User.findOne({ email: req.user.email })

//   } catch (err) {
//     console.log(err);

//   }

// }

export const updateGoal = async (req: Request, res: Response) => {
  try {
    const { _id, text } = req.body;
    const user = await User.findOneAndUpdate(
      { email: req.user.email, "goals._id": _id },
      { $set: { "goals.$.text": text } },
      { new: true }
    ).catch((err) => {
      console.log(err);
      res.status(404).send("Goal not found");
    });
    
    user && res.json(user.goals);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong. Please try again later");
  }
};

export const deleteGoal = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { $pull: { goals: { _id } } },
      { new: true }
    ).catch((err) => {
      console.log(err);
      res.status(404).send("Goal not found");
    });
    user && res.json(user.goals);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong. Please try again later");
  }
}
