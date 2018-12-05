import { combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import actorReducer from '../reducers/actor';
import { IApplicationState, initialState } from './state';

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<IApplicationState>({
    actor: actorReducer,
});

export function configureStore(): Store<IApplicationState> {
    let middleware;

    if (process.env.NODE_ENV !== 'production') {
      middleware = composeWithDevTools();
    }

    const store = createStore(rootReducer, initialState, middleware) as Store<IApplicationState>;

    return store;
  }
