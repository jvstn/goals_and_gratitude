import { Request, Response } from "express";

export const logoutUser = (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server not responding. Please try agian later" });
  }
};
