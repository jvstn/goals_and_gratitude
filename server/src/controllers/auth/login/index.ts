import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { User } from "../../../models/user";
import { IUser } from "../../../utils/authUtils";
import { comparePassword } from "../../../utils/hash";

export const login = async (req: Request, res: Response) => {
  try {
    // check if email and password are provided
    const { email, password } = req.body;
    if (!email)
      return res.status(400).send({ message: "Please provide a valid email" });
    if (!password)
      return res.status(400).send({ message: "Please enter your password" });

    // check if email has an account linked
    const user = await (await User.findOne({ email })).toObject();
    if (!user)
      return res
        .status(400)
        .send({ message: "Account not found. Please sign up first" });

    // if password matches return token and user doc
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send({ message: "Incorrect message" });
    
    const token = await jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "14d",
    })
  

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"
    });

    res.status(200);
    
    // So hashed password not readable on client
    delete user.password;
    
    res.json({message: "Login successful", user});

  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server error. Please try again later'})
  }
  
}