import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Navigator from "./navigator";

import { getPersistor, getStore } from "./store";

const store = getStore();
const persistor = getPersistor(store);

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);
