import { Reducer } from 'redux';

import IActor from '../../entities/IActor';
import { ActorActionTypes, IActorAction } from './actions';
import initialState from './state';
import { IActorState } from './state';

const reducer: Reducer<IActorState> = (state = initialState, action = { type: '' } ) => {
    switch (action.type) {

        case ActorActionTypes.ADD_ACTOR:
            return {
                ...state,
                actors: [
                    ...state.actors,
                    (action as IActorAction).action as IActor,
                ],
            };

        case ActorActionTypes.REMOVE_ACTOR:
            return {
                ...state,
                actors: [
                    ...state.actors.filter((actor) => !(actor.name === (action as IActorAction).action.name)),
                ],
            };

        case ActorActionTypes.ROLL_FOR_ALL_ACTORS:
            return {
                ...state,
                actors: state.actors.map((actor) => {
                    actor.rollForInitiative();
                    return actor;
                }),
            };

        default:
            return state;
    }
};

export { default as actions, IActorAction } from './actions';
export { default as selectors } from './selectors';
export { IActorState } from './state';
export default reducer;
