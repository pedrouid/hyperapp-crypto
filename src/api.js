import axios from 'axios';

/**
 * @desc get prices
 * @param {Number}   [limit=10]
 * @return {Promise}
 */
export const apiGetPrices = (limit = 10) =>
  axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`);
