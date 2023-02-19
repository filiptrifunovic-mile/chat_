const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const app = express();

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {});

app.listen(4000);
