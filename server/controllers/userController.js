const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract email and password
  const { email, password } = req.body;

  try {
    // Check if user doesnt exist
    let user = await User.findOne({ email });
    if (user) {
      return res.status(422).json({ msg: "User already exists" });
    }
    // Create new user
    user = new User(req.body);

    // Hashing password
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);

    // Save new user
    await user.save();

    // Create an sign JWT
    const payload = {
      user: { id: user.id },
    };

    // Sign JWT
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600, // 1 hour
      },
      (error, token) => {
        if (error) throw error;

        // Confirmation message
        res.json({ token: token });
      }
    );

    //res.status(201).json({ msg: "User created" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error creating user");
  }
};
