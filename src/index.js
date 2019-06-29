import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterStore from './stores/counter'; // 방금 만든 스토어 불러와줍니다.
import MarketStore from './stores/market';

const counter = new CounterStore();
const market = new MarketStore();

ReactDOM.render(
  <Provider counter={counter} market={market}>
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();