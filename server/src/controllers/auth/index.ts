import { exec } from "child_process";
import { Request, Response } from "express";
import { User } from "../../models/user";
import { hashPassword } from "../../utils/hash";

export const signupUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    // Validate all required fields
    if (!username) return res.status(400).send("Username required");
    if (!password) return res.status(400).send("Password required");
    if (!email) return res.status(400).send("email required");
    

    //check if email or username taken
    const emailInUse = await User.findOne({ email }).exec();
    if (emailInUse)
      return res.status(400).send("Email already in use. Please login");
    const userNameTaken = await User.findOne({ username }).exec();
    if (userNameTaken)
      return res.status(400).send("Username already in use. Choose another")
    
    const hashedPassword = await hashPassword(password);
    User.create({username, email, password: hashedPassword})
    res.status(200).send("Sucessful registration");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error please try again later");
  }
};
