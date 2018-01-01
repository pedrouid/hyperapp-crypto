import { h, app } from 'hyperapp'; // eslint-disable-line

const Coin = ({ coin, native }) => (
  <div class="coin">
    <p class="coin-rank">{coin.rank}</p>
    <p class="coin-name">{`${coin.name} [${coin.symbol}]`}</p>
    <p class="coin-price">{`${coin.price_usd} ${native}`}</p>
  </div>
);

export default Coin;
