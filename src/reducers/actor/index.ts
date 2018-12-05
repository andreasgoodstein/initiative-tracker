import { Reducer } from 'redux';

import IActor from '../../entities/IActor';
import actions, { IActorAction } from './actions';
import initialState from './state';
import { IActorState } from './state';

const reducer: Reducer<IActorState> = (state = initialState, action = { type: '' } ) => {
    switch (action.type) {

        case actions.addActorAction({} as IActor).type:
            return {
                ...state,
                actors: [
                    ...state.actors,
                    (action as IActorAction).action as IActor,
                ],
            };

        case actions.removeActorAction({} as IActor).type:
            return {
                ...state,
                actors: [
                    ...state.actors.filter((actor) => !(actor.name === (action as IActorAction).action.name)),
                ],
            };

        default:
            return state;
    }
};

export { default as actions, IActorAction } from './actions';
export { default as selectors } from './selectors';
export { IActorState } from './state';
export default reducer;
