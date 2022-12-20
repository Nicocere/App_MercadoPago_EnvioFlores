const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");

const cors = require('cors')

const indexRouter = require("./Routes/routes");

const app = express();

app.use(cors())

app.get('/payment', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

dotenv.config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
