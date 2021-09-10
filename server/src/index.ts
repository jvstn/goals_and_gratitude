import express, {Request, Response} from 'express'
import { readdir, readdirSync } from 'fs';
import mongoose from 'mongoose'

const port = 5000;

const app = express();

readdirSync('./src/routes').map((route: string) => {
  app.use('/api', require(`./routes/${route}`))
})

app.listen(port, () => console.log(`Listening ${port}`));
