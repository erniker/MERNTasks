// Route for creating user
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { check } = require("express-validator");

// Create an user
// api/users
router.post(
  "/",
  [
    check("name", "The name field is required").not().isEmpty(),
    check("email", "A valid email is required").isEmail(),
    check(
      "password",
      "Please enter a password at least 8 character and contain At least one uppercase, one lower case and one special character."
    ).isStrongPassword(),
  ],
  userController.createUser
);
module.exports = router;
