import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { COUNTER_FEATURE_KEY, counterReducer } from "./app/redux/counter.slice";


const store = configureStore({
  reducer: { [COUNTER_FEATURE_KEY]: counterReducer },
  // Additional middleware can be passed to this array
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
