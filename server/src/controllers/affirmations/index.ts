import { Request, Response } from "express";
import { Item, ItemNames } from "../../models/item";
import { User } from "../../models/user";
import { startOfDay, endOfDay, isBefore, isAfter } from "date-fns/fp";
import { get } from "http";


export const createAffirmation = async (req: Request, res: Response) => {
  try {
    const affirmationType = req.url.substr(1, 5);
    const { text } = req.body;
    const affirmation = await Item.create({ text });
    await User.findOneAndUpdate(
      { email: req.user.email },
      {
        $push: { [affirmationType]: affirmation },
      },
      { new: true }
    );
    res.json(affirmation);
  } catch (err) {
    console.log(err);
  }
};

export const readAffirmations = async (req: Request, res: Response) => {
  try {
    const affirmationType = req.url.substr(1, 5) as ItemNames;
    console.log(affirmationType);
    const requestDate = req.query.date as string;
    const date = new Date(requestDate);
    const user = await User.findOne({ email: req.user.email });
    const affirmationsForTheDay = user[affirmationType].filter(
      (affirmation) =>
        isBefore(affirmation.createdAt, startOfDay(date)) && isAfter(endOfDay(date))
    );
    res.status(200).json(affirmationsForTheDay);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong. Please try again later");
  }
};


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
