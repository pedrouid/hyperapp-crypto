export const homeState = {
  fetching: false,
  coins: [],
  native: 'USD',
  error: null
};

export const homeActions = {
  API_COINS_REQUEST: () => () => ({ fetching: true }),
  API_COINS_SUCCESS: data => () => ({ fetching: false, coins: data }),
  API_COINS_FAILURE: error => () => ({ fetching: false, error })
};
