require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router");
const cors = require("cors");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/errorMiddleware");
const contact = require("./router/contactForm.route");

const app = express();

// cors policy settings

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  Credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

const port = 5000;

// middlewares

app.use("/api/auth", router); //this is for authenticcation
app.use("/api/contact", contact); // middleware for contact form

// error middleware
app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
  });
});
