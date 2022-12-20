const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");

const cors = require('cors')

const indexRouter = require("./Routes/routes");

const app = express();

app.use(cors({
    origin: whiteList
}))

const whiteList = [ 'https://envioflores.vercel.app/']

dotenv.config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
