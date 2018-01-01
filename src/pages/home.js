import { h, app } from 'hyperapp'; // eslint-disable-line
import { apiGetPrices } from '../helpers/api';
import Coin from '../components/Coin'; // eslint-disable-line
import '../styles/home.css';

const home = (state, actions) => {
  const { fetching, coins, native } = state;
  const { API_COINS_REQUEST, API_COINS_SUCCESS, API_COINS_FAILURE } = actions;
  if (!fetching && !coins.length) {
    API_COINS_REQUEST();
    apiGetPrices()
      .then(({ data }) => API_COINS_SUCCESS(data))
      .catch(error => API_COINS_FAILURE(error));
  }
  return (
    <div class="wrapper">
      <div class="content">
        <h1>Cryptocurrency Prices</h1>
        <div class="column">
          {fetching ? (
            <div class="spinner" />
          ) : (
            <div class="coins-list">{coins.map(coin => <Coin coin={coin} native={native} />)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default home;
