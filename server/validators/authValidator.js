const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters" })
    .max(30, { message: "Name must not be more than 30 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be valid" })
    .max(30, { message: "Email must be valid" }),

  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "password must be atleast of 6 characters" })
    .max(30, { message: "password must not be more than of 30 characters" }),
});

module.exports = signupSchema;
