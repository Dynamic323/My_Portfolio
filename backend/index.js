const express = require("express");
require("dotenv");
const PublicRoutes = require("./src/routes/route");
const PORT = process.env.PORT || 2000;
const app = express();

app.get("/", (req, res) => {
  res.json("Backendd RUnning");
});

app.use("/api", PublicRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Backend running on port ${PORT}`);
});
