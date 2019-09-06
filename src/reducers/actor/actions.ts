import { AnyAction } from "redux";

import IActor from "../../entities/IActor";
import generateNewActorId from "../../logic/idGenerator";
import { GameActionTypes } from "../../reducers/game/game_actions";

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
  TRY_ADD_ACTOR = "@@actor/ADD_ACTOR",
  ROLL_FOR_ALL_ACTORS = "@@actor/ROLL_FOR_ALL"
}

export interface IActorAction extends AnyAction {
  payload: { actor: IActor };
}

export interface IActorArrayAction extends AnyAction {
  payload: { actorList: IActor[] };
}

const createRemoveActorAction = (
  actor: IActor,
  actorList: IActor[]
): AnyAction | AnyAction[] => {
  const newActorArray = [...removeActorFromList(actor, actorList)];

  const actionArray = [
    {
      payload: { actorList: newActorArray },
      type: ActorActionTypes.REMOVE_ACTOR
    }
  ];

  if (isCurrentActorTopOfTheRound(actorList)) {
    return [
      ...actionArray,
      {
        type: GameActionTypes.INCREMENT_ROUND_COUNTER
      }
    ];
  }

  return actionArray;
};

const createHighlightNextActorAction = (
  actorList: IActor[]
): AnyAction | AnyAction[] => {
  const newActorArray = [...getNextActiveActor(actorList)];

  const actionArray = [
    {
      payload: { actorList: newActorArray },
      type: ActorActionTypes.HIGHLIGHT_NEXT_ACTOR
    }
  ];

  if (isCurrentActorTopOfTheRound(actorList)) {
    return [
      ...actionArray,
      {
        type: GameActionTypes.INCREMENT_ROUND_COUNTER
      }
    ];
  }

  return actionArray;
};

export default {
  tryAddActorAction: (): AnyAction => ({
    type: ActorActionTypes.TRY_ADD_ACTOR
  }),

  addActorAction: (actor: IActor): IActorAction => {
    const newId = generateNewActorId();
    const newActor = actor.clone(newId);

    return {
      payload: { actor: newActor },
      type: ActorActionTypes.ADD_ACTOR
    };
  },

  removeActorAction: (actor: IActor, actorList: IActor[]) =>
    createRemoveActorAction(actor, actorList),

  updateActorRolls: (actorList: IActor[]): IActorArrayAction => ({
    payload: { actorList },
    type: ActorActionTypes.UPDATE_ACTOR_ROLL
  }),

  rollAllActors: (): AnyAction => ({
    type: ActorActionTypes.ROLL_FOR_ALL_ACTORS
  }),

  highlightNextActor: (actorList: IActor[]) =>
    createHighlightNextActorAction(actorList)
};
