import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './navigator';

import { configureStore } from './store';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
