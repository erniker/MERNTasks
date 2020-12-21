const task = require("../models/Task");
const project = require("../models/Project");
const { validationResult } = require("express-validator");
const Project = require("../models/Project");
const Task = require("../models/Task");
const { translateAliases } = require("../models/Project");

// Create new task
exports.createTask = async (req, res) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Extract project and check if exist
    const { project } = req.body;

    const projectExist = await Project.findById(project);
    if (!projectExist) {
      return res.status(404).json({ msg: "Project not found" });
    }
    // Check if current project belong to authenticated user
    if (projectExist.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    // Create task
    const task = new Task(req.body);
    await task.save();
    res.json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).send("Unknow error");
  }
};

// Get tasks by project id
exports.getTasksByProjectId = async (req, res) => {
  try {
    // Extract project and check if exist
    const { project } = req.body;
    const projectExist = await Project.findById(project);
    if (!projectExist) {
      return res.status(404).json({ msg: "Project not found" });
    }
    // Check if current project belong to authenticated user
    if (projectExist.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    // Get tasks by project id
    const tasks = await Task.find({ project });
    res.json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).send("Unknow error");
  }
};

// Update task
exports.updateTask = async (req, res) => {
  try {
    // Extract project and check if exist
    const { project, name, state } = req.body;

    // Check if task exist
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task does not exist" });
    }

    // Extract project
    const projectExist = await Project.findById(project);
    // Check if current project belong to authenticated user
    if (projectExist.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    // Create a new task object with new information
    const newTask = {};
    if (name) newTask.name = name;
    if (state) newTask.state = state;
    // Save task
    task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, {
      new: true,
    });
    res.json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).send("Unknow error");
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    // Extract project and check if exist
    const { project } = req.body;

    // Check if task exist
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task does not exist" });
    }

    // Extract project
    const projectExist = await Project.findById(project);
    // Check if current project belong to authenticated user
    if (projectExist.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    // Delete task
    await Task.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Task deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Unknow error");
  }
};
