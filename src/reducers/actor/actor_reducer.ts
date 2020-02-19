import { Reducer } from "redux";

import { ActorActionType } from "../action_types";
import initialState, { IActorState } from "./actor_state";

const actorReducer: Reducer<IActorState> = (
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

export default actorReducer;
