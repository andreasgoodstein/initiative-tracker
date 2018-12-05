import React from 'react';
import { Provider } from 'react-redux';

import EncounterLayout from './layouts/encounter';

import { configureStore } from './store';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <EncounterLayout />
  </Provider>
);
