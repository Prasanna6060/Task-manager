import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose'

import taskRouter from "./routes/task.route.js";

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("connected to db")
}).catch((err) => {
  console.log(err)
})

const app = express();
const Port = process.env.PORT;

// app.use(express.static('./public'))
app.use(express.json());

app.use("/api/v1", taskRouter);

app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
