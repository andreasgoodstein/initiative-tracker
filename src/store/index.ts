import { AsyncStorage } from "react-native";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import {
  createMigrate,
  MigrationManifest,
  persistReducer,
  persistStore
} from "redux-persist";
import thunk from "redux-thunk";

import actorReducer from "../reducers/actor";
import gameReducer from "../reducers/game/game_reducer";
import partyReducer from "../reducers/party/party_reducer";

import { IApplicationState, initialState } from "./state";

const migrations: MigrationManifest = {
  0: () => ({
    ...initialState,
    _persist: {
      rehydrated: true,
      version: 0
    }
  })
};

const persistConfig = {
  key: "theinitiativetracker",
  migrate: createMigrate(migrations),
  storage: AsyncStorage,
  version: 0
};

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<IApplicationState>({
  actorState: actorReducer,
  gameState: gameReducer,
  partyState: partyReducer
});

export const getStore = (): Store<IApplicationState> => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return applyMiddleware(thunk)(createStore)(persistedReducer, initialState);
};

export const getPersistor = (store: Store<IApplicationState>) => {
  return persistStore(store);
};
