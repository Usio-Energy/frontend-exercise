import React from 'react';
import { render } from 'react-dom'
import Store from './store'
import { Provider } from 'react-redux'
import './index.css';
import App from './components/app/app';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)