import axios from 'axios';

/**
 * @desc get coin prices
 * @param  {String}   [limit='20']
 * @param  {String}   [native='USD']
 * @return {Promise}
 */
export const apiGetPrices = (limit = '20', native = 'USD') =>
  axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}&convert=${native}`);
