require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../src/model/Admin"); // Your admin model

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const adminExists = await Admin.findOne({
      email: "otamereisrael8@gmail.com",
    });
    if (adminExists) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("Admin@1234", 12);

    await Admin.create({
      email: "otamereisrael8@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ admin created successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Failed to create admin:", err);
    process.exit(1);
  }
};

createAdmin();
