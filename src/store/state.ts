import GameScreen from "../entities/GameScreenEnum";
import { IActorState } from "../reducers/actor";
import { IGameState } from "../reducers/game";

export interface IApplicationState {
  readonly actor: IActorState;
  readonly gameState: IGameState;
}

export const initialState: IApplicationState = {
  actor: {
    actorList: [],
    nextActorId: 1
  },

  gameState: {
    gameScreen: GameScreen.Encounter,
    roundCount: 0
  }
};
