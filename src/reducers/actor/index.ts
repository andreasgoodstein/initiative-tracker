import { Reducer } from "redux";

import { ActorActionTypes } from "./actions";
import initialState, { IActorState } from "./state";

const reducer: Reducer<IActorState> = (
  actorState = initialState,
  action = { type: "" }
) => {
  switch (action.type) {
    case ActorActionTypes.ADD_ACTOR:
      return {
        ...actorState,
        actorList: [...actorState.actorList, action.payload.actor],
        isAddingActor: false
      };

    case ActorActionTypes.REMOVE_ACTOR:
      return {
        ...actorState,
        actorList: action.payload.actorList
      };

    case ActorActionTypes.UPDATE_ACTOR_ROLL:
      return {
        ...actorState,
        actorList: action.payload.actorList,
        isRollingInitiative: false
      };

    case ActorActionTypes.HIGHLIGHT_NEXT_ACTOR:
      return {
        ...actorState,
        actorList: action.payload.actorList
      };

    case ActorActionTypes.TRY_ADD_ACTOR:
      return {
        ...actorState,
        isAddingActor: true
      };

    case ActorActionTypes.ROLL_FOR_ALL_ACTORS:
      return {
        ...actorState,
        isRollingInitiative: true
      };

    default:
      return actorState;
  }
};

export { default as actions, IActorAction } from "./actions";
export { default as selectors } from "./selectors";
export { IActorState } from "./state";
export default reducer;
