const Admin = require("../model/Admin");
const jwt = require("jsonwebtoken");

// Generate JWT token
const signToken = (id, role = "admin") => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  });
};

// Admin Register
exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        status: "fail",
        message: "Password must be at least 6 characters",
      });
    }

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({
        status: "fail",
        message: "Admin already exists",
      });
    }

    const newAdmin = await Admin.create({ email, password });

    const token = signToken(newAdmin._id, newAdmin.role);

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        _id: newAdmin._id,
        email: newAdmin.email,
        token,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Server error during registration",
      error: err.message,
    });
  }
};

// Admin Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    // Find admin
    const admin = await Admin.findOne({ email }).select(
      "+password +loginAttempts +lockUntil"
    );

    if (!admin || !(await admin.comparePassword(password))) {
      if (admin) {
        await admin.incrementLoginAttempts();
        await admin.save();
      }

      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    // Reset login attempts
    admin.loginAttempts = 0;
    admin.lockUntil = undefined;
    admin.lastLogin = Date.now();
    await admin.save();

    const token = signToken(admin._id, admin.role);

    res.status(200).json({
      status: "success",
      token,
      data: {
        admin: {
          id: admin._id,
          email: admin.email,
          role: admin.role,
        },
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Server error during login",
      error: err.message,
    });
  }
};
