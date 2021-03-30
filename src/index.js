import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './Redux/store'
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
