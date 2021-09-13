import {model, Model, Schema} from 'mongoose'
import { IUser } from '../utils/authUtils';

const userSchema = new Schema<IUser>({
  username: String,
  email: {
    type: 'string',
    required: true,
    unique: true
  },
  password: String,
  createdAt: { type: "string", default: new Date().toISOString() }
})


export const User = model<IUser>('User', userSchema);

