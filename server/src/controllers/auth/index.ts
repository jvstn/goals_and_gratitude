import { Request, Response } from "express";


const signup = (req: Request, res: Response) => {
  if (!req.body.username) res.status(400).send('Username required');
  if (!req.body.password) res.status(400).send('Username required');
}