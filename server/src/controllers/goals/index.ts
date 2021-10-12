import { Request, Response } from "express";
import { NativeError } from "mongoose";
import { Item } from "../../models/item";
import { User } from "../../models/user";
import { IUser } from "../../utils/authUtils";

export const createGoal = async (req: Request, res: Response) => {
  try {
    console.log('Running goals controller');  
    const { text, email } = req.body;
    const goal = await Item.create({ text });
    const user = await User.findOneAndUpdate(
      email,
      {
        $push: { goals: goal },
      },
      { new: true },
    );
    const goals = user.goals;
    res.json(goals);
  } catch (err) {
    console.log(err);
  }
};
