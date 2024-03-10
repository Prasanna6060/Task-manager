import taskModel from "../models/task.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json("User not found", error);
  }
};
export const getSingleTask = async (req, res) => {
  const id = req.params.id;
  try {
    const findTask = await taskModel.findById(id);
    return res.status(200).json({ "Task found": findTask });
  } catch (error) {
    res.status(404).json({ "Task  not found": error.message });
  }
};
export const createTasks = async (req, res) => {
  try {
    const newtasks = new taskModel(req.body);
    const savedTasks = await newtasks.save();
    return res
      .status(201)
      .json({ message: "Task saved successfully", savedTasks });
  } catch (error) {
    return res.status(500).json({ message: "error saving tasks", error });
  }
};

export const updateTasks = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const updateTasks = await taskModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    console.log(updateTasks);
    res.status(201).json({ message: "Task updated successfully", updateTasks });
  } catch (error) {
    console.log("error on updating", error);
    res.status(500).json({ message: "Error updating" });
  }
};
export const deleteTasks = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTask = await taskModel.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
