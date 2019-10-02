import { Reducer } from "redux";

import { ActorActionType } from "./actions";
import initialState, { IActorState } from "./state";

const reducer: Reducer<IActorState> = (
  actorState = initialState,
  action = { type: "" }
) => {
  switch (action.type) {
    case ActorActionType.ADD_ACTOR:
      return {
        ...actorState,
        actorList: [...actorState.actorList, action.payload.actor],
        nextActorId: actorState.nextActorId + 1
      };

    case ActorActionType.UPDATE_ACTOR_LIST:
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
