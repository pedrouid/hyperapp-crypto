import { h, app } from 'hyperapp'; // eslint-disable-line

const INITIAL_STATE = {
  count: 0
};

const actions = {
  down: () => state => {
    return { count: state.count - 1 };
  },
  up: () => state => {
    return { count: state.count + 1 };
  }
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

app(INITIAL_STATE, actions, view, document.body);
