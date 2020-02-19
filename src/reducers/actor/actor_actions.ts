import { Action } from "redux";

import IActor, { Actor } from "../../entities/IActor";
import { ActorActionType, GameActionType } from "../action_types";

import { ThunkAction } from "redux-thunk";
import { IApplicationState } from "store/state";
import {
  getNextActiveActor,
  isCurrentActorTopOfTheRound,
  removeActorFromList
} from "./actor_helpers";

export interface IActorAction extends Action {
  payload: { actor: IActor };
}

export interface IActorArrayAction extends Action {
  payload: { actorList: IActor[] };
}

const addActor = (
  actorName: string
): ThunkAction<void, IApplicationState, {}, IActorAction> => (
  dispatch,
  getState
) => {
  const {
    actorState: { nextActorId }
  } = getState();

  const newActor = new Actor(nextActorId, actorName);

  dispatch({
    payload: { actor: newActor },
    type: ActorActionType.ADD_ACTOR
  });
};

const removeActor = (
  actor: IActor
): ThunkAction<void, IApplicationState, {}, Action> => (dispatch, getState) => {
  const {
    actorState: { actorList }
  } = getState();

  const newActorArray = removeActorFromList(actor, actorList);

  dispatch({
    type: ActorActionType.REMOVE_ACTOR
  });

  dispatch({
    payload: { actorList: newActorArray },
    type: ActorActionType.UPDATE_ACTOR_LIST
  });

  if (isCurrentActorTopOfTheRound(newActorArray)) {
    dispatch({
      type: GameActionType.INCREMENT_ROUND_COUNTER
    });
  }
};

const highlightNextActor = (): ThunkAction<
  void,
  IApplicationState,
  {},
  Action
> => (dispatch, getState) => {
  const {
    actorState: { actorList }
  } = getState();

  const newActorArray = getNextActiveActor(actorList);

  dispatch({
    type: ActorActionType.HIGHLIGHT_NEXT_ACTOR
  });

  dispatch({
    payload: { actorList: newActorArray },
    type: ActorActionType.UPDATE_ACTOR_LIST
  });

  if (isCurrentActorTopOfTheRound(newActorArray)) {
    dispatch({
      type: GameActionType.INCREMENT_ROUND_COUNTER
    });
  }
};

const updateActorRolls = (actorList: IActor[]): IActorArrayAction => ({
  payload: { actorList },
  type: ActorActionType.UPDATE_ACTOR_LIST
});

const bumpActorToLast = (
  actor: IActor
): ThunkAction<void, IApplicationState, {}, IActorArrayAction> => (
  dispatch,
  getState
) => {
  const {
    actorState: { actorList }
  } = getState();

  const actorListWithoutActor = removeActorFromList(actor, actorList);

  const bumpedActorList = [...actorListWithoutActor, actor];

  dispatch({
    payload: { actorList: bumpedActorList },
    type: ActorActionType.UPDATE_ACTOR_LIST
  });
};

export default {
  addActor,
  bumpActorToLast,
  highlightNextActor,
  removeActor,
  updateActorRolls
};
