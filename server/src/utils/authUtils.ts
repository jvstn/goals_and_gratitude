import { IItem } from "../models/item";

export interface IUser {
  username: string;
  email: string;
  password: string;
  createdAt: string;
  goals: IItem[];
  grats: IItem[];
}

