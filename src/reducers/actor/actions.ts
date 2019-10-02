import { Action } from "redux";

import IActor, { Actor } from "../../entities/IActor";
import { GameActionType } from "../../reducers/game/game_actions";

import { ThunkAction } from "redux-thunk";
import { IApplicationState } from "store/state";
import {
  getNextActiveActor,
  isCurrentActorTopOfTheRound,
  removeActorFromList
} from "./helpers";

export enum ActorActionType {
  ADD_ACTOR = "@@actor/ADD",
  REMOVE_ACTOR = "@@actor/REMOVE",
  UPDATE_ACTOR_ROLL = "@@actor/UPDATE_ROLL",
  HIGHLIGHT_NEXT_ACTOR = "@@actor/HIGHLIGHT_NEXT",
  BUMP_ACTOR_TO_LAST = "@@actor/BUMP_ACTOR_TO_LAST",
  UPDATE_ACTOR_LIST = "@@actor/UPDATE_ACTOR_LIST"
}

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
