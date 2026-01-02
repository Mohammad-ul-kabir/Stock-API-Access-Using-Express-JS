const axios = require("axios");

const getStockData = async (req, res) => {
  try {
    const { symbol } = req.params;

    const response = await axios.get(
      `https://finnhub.io/api/v1/quote`,
      {
        params: {
          symbol: symbol,
          token: process.env.FINNHUB_API_KEY
        }
      }
    );

    res.json({
      symbol,
      data: response.data
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stock data" });
  }
};

module.exports = { getStockData };
