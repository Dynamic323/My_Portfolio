const express = require("express");
require("dotenv").config(); // Fixed: Need to call config() method
const cors = require("cors");
const helmet = require("helmet"); // Added for security headers
const routes = require("./src/routes/route");
const mongoose = require("mongoose"); // Changed from destructuring
const PORT = process.env.PORT || 2000;

const app = express();

// Enhanced Middleware Setup
app.use(helmet()); // Security headers
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);
app.get("/", (req, res) => {
  res.json({
    status: "Backend Running",
    database:
      mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
  });
});

// Improved MongoDB Connection
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI not found in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
      retryWrites: true,
      w: "majority",
    });

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// Connection Event Handlers
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.warn("Mongoose disconnected from DB");
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});

// Start Server with DB Connection
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(
        `Database status: ${
          mongoose.connection.readyState === 1 ? "Connected" : "Disconnected"
        }`
      );
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
