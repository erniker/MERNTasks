const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

// Create a project
//api/projects
router.post(
  "/",
  auth,
  [check("name", "The name of the project is required").not().isEmpty()],
  projectController.createProject
);
// Get all projects
router.get("/", auth, projectController.getProject);

// Update a project by id
router.put(
  "/:id",
  auth,
  [check("name", "The name of the project is required").not().isEmpty()],
  projectController.updateProject
);

// Delete project by id
router.delete("/:id", auth, projectController.deleteProject);

module.exports = router;
