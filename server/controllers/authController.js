const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.userAuth = async (req, res) => {
  // Check if there are errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Extract email and password
  const { email, password } = req.body;
  try {
    // Check is user is regitered
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ msj: "The user does not exists, or password is incorrect" });
    }
    // Check password
    const correctPass = await bcryptjs.compare(password, user.password);
    if (!correctPass) {
      return res
        .status(401)
        .json({ msj: "The user does not exists, or password is incorrect" });
    }

    // If all s correct, create an sign JWT
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
  } catch (error) {
    console.log(error);
  }
};
