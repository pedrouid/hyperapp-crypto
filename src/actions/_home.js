export const homeState = {
  fetching: false,
  coins: [],
  show: '20',
  native: 'USD',
  error: null
};

export const homeActions = {
  API_COINS_REQUEST: () => () => ({ fetching: true }),
  API_COINS_SUCCESS: data => () => ({ fetching: false, coins: data }),
  API_COINS_FAILURE: error => () => ({ fetching: false, error }),
  CHANGE_AMOUNT_TO_SHOW: value => () => ({ show: value }),
  CHANGE_NATIVE_CURRENCY: value => () => ({ native: value })
};
