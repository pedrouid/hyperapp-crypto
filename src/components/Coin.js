import { h, app } from 'hyperapp'; // eslint-disable-line
import { formatPrice } from '../helpers/utilities';
import '../icons/index.css';

const Coin = ({ coin, native }) => {
  let price = null;
  switch (native) {
    case 'USD':
      price = coin.price_usd;
      break;
    case 'EUR':
      price = coin.price_eur;
      break;
    case 'GBP':
      price = coin.price_gbp;
      break;
    default:
      price = coin.price_usd;
      break;
  }
  const change =
    Number(coin.percent_change_24h) > 0
      ? 'positive'
      : Number(coin.percent_change_24h) < 0 ? 'negative' : null;
  return (
    <div class={`coin coin-${coin.symbol}`}>
      <div class="coin-rank">{coin.rank}</div>
      <div class="coin-icon">
        <div class={`icon icon-${coin.symbol.toLowerCase()}`} />
      </div>
      <div class="coin-name">{`${coin.name} [${coin.symbol}]`}</div>
      <div class={`coin-24h-change ${change}`}>{`${coin.percent_change_24h} %`}</div>
      <div class="coin-price">{`${formatPrice(price)} ${native}`}</div>
    </div>
  );
};

export default Coin;
