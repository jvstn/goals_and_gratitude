import express, { Request, Response } from "express";
import { readdir, readdirSync } from "fs";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
export const port = 5500;
export const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Db connected", process.env.MONGODB_URL))
  .catch(() => console.log("Failed to connect to db"));

readdirSync("./src/routes").map((route: string) => {
  app.use("/api", require(`./routes/${route}`));
});

//Listen in server.ts file so supertest can call its own instance of app
