import express, { json, urlencoded } from "express";
const path = require("path");
import cookieParser from "cookie-parser";
import logger from "morgan";
import { config } from "dotenv";

import cors from 'cors';

import indexRouter from "../Routes/routes";

const app = express();

app.use(cors())

config();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

export default app;
