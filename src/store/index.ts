import { AsyncStorage } from "react-native";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import actorReducer from "../reducers/actor";
import gameReducer from "../reducers/game";

import multi from "./middleware/dispatch_multi";
import { IApplicationState, initialState } from "./state";

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<IApplicationState>({
  actor: actorReducer,
  gameState: gameReducer
});

const persistConfig = {
  key: "theinitiativetracker",
  storage: AsyncStorage
};

export const getStore = (): Store<IApplicationState> => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return applyMiddleware(multi)(createStore)(persistedReducer, initialState);
};

export const getPersistor = (store: Store<IApplicationState>) => {
  return persistStore(store);
};
