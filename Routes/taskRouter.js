const express = require("express");

const Task = require("../taskModel/taskModel");

const router = express.Router();

const { body, validationResult } = require("express-validator");

const validate = [
  body("title").notEmpty().withMessage("title field is required"),
  body("description").notEmpty().withMessage("description field is required"),
  body("status").notEmpty().withMessage("status field is required"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({ status: "success", data: tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tasks = await Task.findById(req.params.id);

    res.status(200).json({ status: "success", data: tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/tasks", validate, async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const newTask = await new Task({ title, description, status });
    newTask.save();
    res.status(201).json({ status: "success", data: newTask });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const { title, description, status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true }
    );
    console.log(updatedTask, "sdsdsd");
    if (!updatedTask) {
      res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ status: "success", data: updatedTask });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Task.findByIdAndDelete(id);

    if (!data) {
      res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
