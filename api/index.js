import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4100, () => {
  console.log("server is running on port 4100");
});

app.use("/api/user", userRouter);
