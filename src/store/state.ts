import { IActorState } from "../reducers/actor";
import { IGameState } from "../reducers/game";

export interface IApplicationState {
  readonly actor: IActorState;
  readonly gameState: IGameState;
}

export const initialState: IApplicationState = {
  actor: {
    actorList: [],
    isAddingActor: false,
    isRollingInitiative: false,
  },

  gameState: {
    roundCount: 0,
  },
};
