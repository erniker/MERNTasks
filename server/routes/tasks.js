const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController.js");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

// Create a task
// api/tasks
router.post(
  "/",
  auth,
  [
    check("name", "The name is required").not().isEmpty(),
    check("projectId", "The project id is required").not().isEmpty(),
  ],
  taskController.createTask
);

// Get task by project Id
router.get("/", auth, taskController.getTasksByProjectId);

// Update a task
router.put("/:id", auth, taskController.updateTask);

// Delete task
router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
