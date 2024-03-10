import express from "express";
import {
  createTasks,
  deleteTasks,
  getAllTasks,
  getSingleTask,
  updateTasks,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getSingleTask);
router.post("/tasks/:id", createTasks);
router.put("/tasks/:id", updateTasks);
router.delete("/tasks/:id", deleteTasks);

export default router;
