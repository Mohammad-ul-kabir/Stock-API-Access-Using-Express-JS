const express = require("express");
const axios = require("axios");
const Stock = require("../models/Stock");

const router = express.Router();

router.get("/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;

    // 🔹 Fetch stock data (example response you already have)
    const response = await axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.STOCK_API_KEY}`
    );

    const data = response.data;

    // 🔹 Save to MongoDB
    const stock = new Stock({
      symbol,
      currentPrice: data.c,
      high: data.h,
      low: data.l,
      open: data.o,
      previousClose: data.pc,
      timestamp: data.t,
    });

    await stock.save();

    res.json({
      message: "Stock data saved successfully",
      stock,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stock data" });
  }
});

module.exports = router;
