import express, { Request, Response } from "express";
import { readdir, readdirSync } from "fs";
import authRouter from "./routes/auth";
import goalsRouter from "./routes/goals";
import gratsRouter from "./routes/grats";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
export const port = 5500;
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/goals";
export const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

mongoose
  .connect(mongoUri)
  .then(() => console.log(mongoUri))
  .catch(() => console.log("Failed to connect to db"));

app.use("/api", authRouter);
app.use("/api", goalsRouter);
app.use("/api", gratsRouter);

//Listen in server.ts file so supertest can call its own instance of app
