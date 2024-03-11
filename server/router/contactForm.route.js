const express = require("express");
const router = express.Router();
const contactForm = require("../controller/contactForm.controller");

router.route("/message").post(contactForm);

module.exports = router;
