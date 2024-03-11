const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  res.send("Auth get data");
};

// logic for register a user -----------------

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ message: "Email already registered. Please login." });
    }

    // otherwise Create user
    const userCreated = await User.create({
      username,
      email,
      password,
    });

    // Respond with the newly created user
    res.status(201).json({
      message: "Registeration successfull!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // console.error(error); // Log the error for debugging
    // res.status(500).send("Internal Server Error");
    next(error);
  }
};

// ! logic for login a user -----------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const passwordMatch = await bcrypt.compare(password, userExist.password);

    if (passwordMatch) {
      return res.status(200).json({
        message: "Login successful!",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(), // Fix: use userExist, not userCreated
      });
    } else {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    console.error(error);
    // return res.status(500).send("Internal Server Error");
    next(error);
  }
};

// * getting a user logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    if (!userData) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.error(`Error getting user: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { home, register, login, user };
