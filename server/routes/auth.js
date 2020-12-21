// Route for auth user
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");

// Create an user
// api/auth
router.post(
  "/",
  [
    check("email", "A valid email is required").isEmail(),
    check(
      "password",
      "Please enter a password at least 8 character and contain At least one uppercase, one lower case and one special character."
    ).isStrongPassword(),
  ],
  authController.userAuth
);
module.exports = router;
