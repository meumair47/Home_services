const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(401).json({
      message: "Unauthorized HTTP, token not provided",
    });
  }

  //   console.log("token from authmiddleware", token);

  const jwtToken = token.replace("Beared", "").trim();

  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    res.status(403).json({
      message: "Unauthorized, Invalid token",
    });
  }
};

module.exports = authMiddleware;
