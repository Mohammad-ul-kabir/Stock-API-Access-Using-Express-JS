const axios = require("axios");

const fetchStockFromAPI = async (symbol) => {
  const response = await axios.get(
    `https://example-stock-api.com/stock/${symbol}`
  );

  return response.data;
};

module.exports = fetchStockFromAPI;
