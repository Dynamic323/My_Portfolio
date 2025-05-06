const express = require("express");
const routes = express.Router();
const publicController = require("../controller/public");
const authController = require("../controller/authController");
const rateLimit = require("express-rate-limit");

// Rate limiting configuration
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login requests per window
  message: {
    status: "error",
    message: "Too many login attempts, please try again later",
  },
  handler: (req, res) => {  
    res.status(429).json({
      status: "error",
      message: "Too many login attempts, please try again later",
    });
  },
});

// Public Routes
routes.get("/", publicController.startApi);

// Admin Authentication Routes
routes.post("/admin/login", loginLimiter, authController.login);
routes.post("/admin/register",  authController.register);

module.exports = routes;
