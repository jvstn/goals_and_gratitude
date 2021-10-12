import { Request, Response } from "express";
import { User } from "../../../models/user";
import { hashPassword } from "../../../utils/hash";
import jwt from 'jsonwebtoken'
const dotenv = require("dotenv");
dotenv.config();

export const signupUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name) return res.status(400).send("name required");
    if (!password) return res.status(400).send("Password required");
    if (!email) return res.status(400).send("Email required");

    //can't have duplicate accounts
    const emailInUse = await User.findOne({ email }).exec();
    if (emailInUse)
      return res.status(400).send("Email already in use. Please login");

    const hashedPassword = await hashPassword(password);
    const user = await (await User.create({ name, email, password: hashedPassword })).toObject();

    //Use cookies instead of local storage; more secure from XSS
    const token = await jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "14d",
      algorithm: "HS256",
    });

    delete user.password;
    res.cookie("token", token, {
      httpOnly: true,
    });
    res.status(200);
    res.json({ message: "Successful registration", user});
  } catch (err) {
    console.log(err);
    res.status(500).send("Error please try again later");
  }
};
