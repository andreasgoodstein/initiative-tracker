import { Reducer } from 'redux';

import IActor from '../../entities/IActor';
import { ActorActionTypes, CombatActionTypes, GameActionTypes, IActorAction } from './actions';
import { getNextActiveActor, removeActorFromList } from './helpers';
import initialState from './state';
import { IActorState } from './state';

const reducer: Reducer<IActorState> = (state = initialState, action = { type: '' }) => {
    switch (action.type) {

        case ActorActionTypes.ADD_ACTOR:
            return {
                ...state,
                actors: [
                    ...state.actors,
                    (action as IActorAction).action as IActor,
                ],
                isAddingActor: false,
            };

        case ActorActionTypes.REMOVE_ACTOR:
            return {
                ...state,
                actors: [
                    ...removeActorFromList(state.actors, (action as IActorAction).action),
                ],
            };

        case ActorActionTypes.UPDATE_ACTOR_ROLL:
            return {
                ...state,
                actors: action.action || [],
                isRollingInitiative: false,
            };

        case ActorActionTypes.HIGHLIGHT_NEXT_ACTOR:
            return {
                ...state,
                actors: [
                    ...getNextActiveActor(state.actors),
                ],
            };

        case GameActionTypes.TRY_ADD_ACTOR:
            return {
                ...state,
                isAddingActor: true,
            };

        case CombatActionTypes.ROLL_FOR_ALL_ACTORS:
            return {
                ...state,
                isRollingInitiative: true,
            };

        default:
            return state;
    }
};

export { default as actions, IActorAction } from './actions';
export { default as selectors } from './selectors';
export { IActorState } from './state';
export default reducer;
