const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const connectDB = require("./config/db");

const app = express();

// 🔹 connect to MongoDB
connectDB();

// 🔹 middleware
app.use(express.json());

// 🔹 routes
const stockRoutes = require("./routes/stockRoutes");
app.use("/api/stocks", stockRoutes);

// 🔹 test route (optional but helpful)
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
