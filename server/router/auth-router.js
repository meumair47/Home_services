const express = require("express");
const authcontroller = require("../controller/auth-controller");
const validate = require("../middleware/validateMiddleware");
const signupSchema = require("../validators/authValidator");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router();

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema), authcontroller.register);
router.route("/login").post(authcontroller.login);
router.route("/user").get(authMiddleware, authcontroller.user);

module.exports = router;
