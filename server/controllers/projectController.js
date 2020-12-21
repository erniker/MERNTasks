const Project = require("../models/Project");
const { validationResult } = require("express-validator");
const { request } = require("express");

exports.createProject = async (req, res) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Create new project
    const project = new Project(req.body);

    // Save Owner using the jwt
    project.owner = req.user.id;

    // Save project
    project.save();
    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unknow error");
  }
};

// Get all project from a current user
exports.getProject = async (req, res) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Get all project
    const projects = await Project.find({ owner: req.user.id }).sort({
      created: -1,
    });
    res.json({ projects });
  } catch (error) {
    console.log(error);
    res.status(500).send("Unknow error");
  }
};

// Update a project by id
exports.updateProject = async (req, res) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Extract info from project
  const { name } = req.body;
  const updateProject = {};
  if (name) {
    updateProject.name = name;
  }
  try {
    // Check id
    let project = await Project.findById(req.params.id);
    // Check if project exist
    console.log(project);
    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }
    //Check project owner
    if (project.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    //update
    project = await Project.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updateProject },
      { new: true }
    );
    res.json({ project });
  } catch (error) {
    console.log(error);
    res.status(500).send("Unknow error");
  }
};

// Delete a project by id
exports.deleteProject = async (req, res) => {
  try {
    // Check id
    let project = await Project.findById(req.params.id);
    // Check if project exist
    console.log(project);
    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }
    //Check project owner
    if (project.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    // Delete project
    await Project.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Project deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Unknow error");
  }
};
