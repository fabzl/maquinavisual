import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './style.css';
import reducers from './redux/reducers';

const options = [reducers, {}];

const middleware = [applyMiddleware(thunk)];

options.push(compose(...middleware));

const store = createStore(...options);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
