import { Action } from "redux";

import IActor, { Actor } from "../../entities/IActor";
import { GameActionTypes } from "../../reducers/game/game_actions";

import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IApplicationState } from "store/state";
import {
  getNextActiveActor,
  isCurrentActorTopOfTheRound,
  removeActorFromList
} from "./helpers";

export enum ActorActionTypes {
  ADD_ACTOR = "@@actor/ADD",
  REMOVE_ACTOR = "@@actor/REMOVE",
  UPDATE_ACTOR_ROLL = "@@actor/UPDATE_ROLL",
  HIGHLIGHT_NEXT_ACTOR = "@@actor/HIGHLIGHT_NEXT",
  ROLL_FOR_ALL_ACTORS = "@@actor/ROLL_FOR_ALL"
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
  dispatch: ThunkDispatch<IApplicationState, {}, IActorAction>,
  getState: () => IApplicationState
) => {
  const {
    actor: { nextActorId }
  } = getState();

  const newActor = new Actor(nextActorId, actorName);

  dispatch({
    payload: { actor: newActor },
    type: ActorActionTypes.ADD_ACTOR
  });
};

const createRemoveActorAction = (actor: IActor) => (
  dispatch: ThunkDispatch<IApplicationState, {}, Action>,
  getState: () => IApplicationState
) => {
  const {
    actor: { actorList }
  } = getState();

  const newActorArray = removeActorFromList(actor, actorList);

  dispatch({
    payload: { actorList: newActorArray },
    type: ActorActionTypes.REMOVE_ACTOR
  });

  if (isCurrentActorTopOfTheRound(newActorArray)) {
    dispatch({
      type: GameActionTypes.INCREMENT_ROUND_COUNTER
    });
  }
};

const createHighlightNextActorAction = () => (
  dispatch: ThunkDispatch<{}, {}, Action>,
  getState: () => IApplicationState
) => {
  const {
    actor: { actorList }
  } = getState();

  const newActorArray = getNextActiveActor(actorList);

  dispatch({
    payload: { actorList: newActorArray },
    type: ActorActionTypes.HIGHLIGHT_NEXT_ACTOR
  });

  if (isCurrentActorTopOfTheRound(newActorArray)) {
    dispatch({
      type: GameActionTypes.INCREMENT_ROUND_COUNTER
    });
  }
};

export default {
  addActor,

  removeActor: (actor: IActor) => createRemoveActorAction(actor),

  updateActorRolls: (actorList: IActor[]): IActorArrayAction => ({
    payload: { actorList },
    type: ActorActionTypes.UPDATE_ACTOR_ROLL
  }),

  rollAllActors: (): Action => ({
    type: ActorActionTypes.ROLL_FOR_ALL_ACTORS
  }),

  highlightNextActor: () => createHighlightNextActorAction()
};
