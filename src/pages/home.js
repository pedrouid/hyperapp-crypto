import { h, app } from 'hyperapp'; // eslint-disable-line
import { apiGetPrices } from '../helpers/api';
import Coin from '../components/Coin'; // eslint-disable-line
import '../styles/home.css';

const home = (state, actions) => {
  const { fetching, coins, show, native } = state;
  const {
    API_COINS_REQUEST,
    API_COINS_SUCCESS,
    API_COINS_FAILURE,
    CHANGE_AMOUNT_TO_SHOW,
    CHANGE_NATIVE_CURRENCY
  } = actions;
  const fetchPrices = (amount, currency) => {
    API_COINS_REQUEST();
    const _amount = typeof amount === 'string' ? amount : show;
    const _currency = typeof currency === 'string' ? currency : native;
    apiGetPrices(_amount, _currency)
      .then(({ data }) => API_COINS_SUCCESS(data))
      .catch(error => API_COINS_FAILURE(error));
  };
  const onChangeAmount = ({ target }) => {
    CHANGE_AMOUNT_TO_SHOW(target.value);
    fetchPrices(target.value, native);
  };
  const onChangeCurrency = ({ target }) => {
    CHANGE_NATIVE_CURRENCY(target.value);
    fetchPrices(show, target.value);
  };
  return (
    <div oncreate={fetchPrices} class="wrapper">
      <div class="content">
        <h1>Cryptocurrency Prices</h1>

        <div class="options">
          <div class="option-wrapper amount-option">
            <p>Show</p>
            <select onchange={onChangeAmount}>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div class="option-wrapper currency-option">
            <p>Currency</p>
            <select onchange={onChangeCurrency}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <div class="column">
          {fetching ? (
            <div class="spinner" />
          ) : (
            <div class="coins-list">
              {coins.map(coin => <Coin key={coin.symbol} coin={coin} native={native} />)}
            </div>
          )}
        </div>

        <div class="footer">
          <a href="https://github.com/pedrouid/hyperapp-crypto" target="_blank">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default home;
