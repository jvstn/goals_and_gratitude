import {model, Model, Schema} from 'mongoose'

interface IUser {
  name: string;
  username: string;
  password: string;
  createdAt: string;
}

const userSchema = new Schema<IUser>({
  name: String,
  username: String,
  password: String,
  createdAt: { type: "string", default: new Date().toISOString() }
})


export const User = model<IUser>('User', userSchema);

