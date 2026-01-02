const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
// const connectDB = require("./config/db");

const stockRoutes = require("./routes/stockRoutes"); // ✅ ADD

const app = express();

// connectDB();

app.use(express.json());

// ✅ ADD THIS LINE
app.use("/api/stocks", stockRoutes);

module.exports = app;
