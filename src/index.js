//必須
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import reducer from './reducers'

import App from './components/App';
import  registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

//(id="root"のところに)描画
ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
