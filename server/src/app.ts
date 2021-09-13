import express, {Request, Response} from 'express'
import { readdir, readdirSync } from 'fs';
import mongoose from 'mongoose'

export const port = 5000;

export const app = express();

readdirSync('./src/routes').map((route: string) => {
  app.use('/api', require(`./routes/${route}`))
})

