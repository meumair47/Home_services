const ContactForm = require("../models/contactform.model");

const contact = async (req, res) => {
  try {
    const response = await req.body;
    await ContactForm.create(response);
    return res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Message failed",
    });
  }
};

module.exports = contact;
