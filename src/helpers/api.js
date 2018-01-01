import axios from 'axios';

/**
 * @desc get coin prices
 * @param  {Number}   [limit=10]
 * @param  {String}   [native='USD']
 * @return {Promise}
 */
export const apiGetPrices = (limit = 10, native = 'USD') =>
  axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}&convert=${native}`);
