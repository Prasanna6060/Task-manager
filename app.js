import express from "express";
import dotenv from "dotenv";
dotenv.config();

import taskRouter from "./routes/task.route.js";

const app = express();
const Port = process.env.PORT;

app.use(express.json());

app.use("/api/v1", taskRouter);

app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
