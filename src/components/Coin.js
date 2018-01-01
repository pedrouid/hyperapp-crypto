import { h, app } from 'hyperapp'; // eslint-disable-line
import '../icons/index.css';

const Coin = ({ coin, native }) => (
  <div class="coin">
    <div class="coin-rank">{coin.rank}</div>
    <div class="coin-icon">
      <div class={`icon icon-${coin.symbol.toLowerCase()}`} />
    </div>
    <div class="coin-name">{`${coin.name} [${coin.symbol}]`}</div>
    <div class="coin-price">{`${coin.price_usd} ${native}`}</div>
  </div>
);

export default Coin;
