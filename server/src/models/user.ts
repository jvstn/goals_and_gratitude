import {model, Schema} from 'mongoose'
import { IUser } from '../utils/authUtils';
import { itemSchema } from './item';

const userSchema = new Schema<IUser>({
  username: String,
  email: {
    type: 'string',
    required: true,
    unique: true
  },
  password: String,
  createdAt: { type: "string", default: new Date().toISOString() },
  goals: [itemSchema],
  grats: [itemSchema]
})


export const User = model<IUser>('User', userSchema);

