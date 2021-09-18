import { Request, Response } from "express";
import { User } from "../../../models/user";
import { hashPassword } from "../../../utils/hash";
import jwt from 'jsonwebtoken'
const dotenv = require("dotenv");
dotenv.config();

export const signupUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    // Want all fields to be entered
    if (!name) return res.status(400).send("name required");
    if (!password) return res.status(400).send("Password required");
    if (!email) return res.status(400).send("Email required");

    //don't want duplicate accounts
    const emailInUse = await User.findOne({ email }).exec();
    if (emailInUse)
      return res.status(400).send("Email already in use. Please login");

    // Don't want plain-text passwords in db
    const hashedPassword = await hashPassword(password);
    User.create({ name, email, password: hashedPassword });
    //In order to protect against XSS and CSRF use cookies
    const token = await jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "14d",
      algorithm: "HS256",
    });
    res.cookie("token", token, {
      httpOnly: true,
    });
    res.status(200);
    res.json({ message: "Successful registration", email, name});
  } catch (err) {
    console.log(err);
    res.status(500).send("Error please try again later");
  }
};
