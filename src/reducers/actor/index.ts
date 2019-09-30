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
        nextActorId: actorState.nextActorId + 1
      };

    case ActorActionTypes.REMOVE_ACTOR:
      return {
        ...actorState,
        actorList: action.payload.actorList
      };

    case ActorActionTypes.UPDATE_ACTOR_ROLL:
      return {
        ...actorState,
        actorList: action.payload.actorList
      };

    case ActorActionTypes.HIGHLIGHT_NEXT_ACTOR:
      return {
        ...actorState,
        actorList: action.payload.actorList
      };

    default:
      return actorState;
  }
};

export { default as actions, IActorAction } from "./actions";
export { default as selectors } from "./selectors";
export { IActorState } from "./state";
export default reducer;
