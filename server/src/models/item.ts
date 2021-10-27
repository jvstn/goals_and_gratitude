import { model, Schema } from 'mongoose'

export interface IItem {
  text: string;
  createdAt?: Date;
  _id?: string;
}

export const itemSchema = new Schema({
  text: "string",
  createdAt: { type: Date, default: new Date()}
})


export const Item = model<IItem>('Item', itemSchema);
