/**
 * @desc format price decimals and thousands separators
 * @param  {String} price
 * @return {String}
 */
export const formatPrice = price => {
  const number = Number(price).toFixed(2);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
