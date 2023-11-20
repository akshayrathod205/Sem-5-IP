const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

const connectDB = "";

const mongoose = require("mongoose");

const start = async () => {
  try {
    await mongoose.connect(connectDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

start();
