const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
    },
    currentPrice: Number,
    high: Number,
    low: Number,
    open: Number,
    previousClose: Number,
    timestamp: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", stockSchema);
