import { h, app } from 'hyperapp';

const state = {
  count: 0
};

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
};

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={actions.down} disabled={state.count <= 0}>
      ー
    </button>
    <button onclick={actions.up}>＋</button>
  </div>
);

app(state, actions, view, document.body);
