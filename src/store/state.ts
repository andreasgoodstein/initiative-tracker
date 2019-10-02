import GameScreen from "../entities/GameScreenEnum";
import { IActorState } from "../reducers/actor";
import { IGameState } from "../reducers/game/game_state";
import { IPartyState } from "../reducers/party/party_state";

export interface IApplicationState {
  readonly actorState: IActorState;
  readonly gameState: IGameState;
  readonly partyState: IPartyState;
}

export const initialState: IApplicationState = {
  actorState: {
    actorList: [],
    nextActorId: 1
  },

  gameState: {
    gameScreen: GameScreen.Encounter,
    roundCount: 0
  },

  partyState: {
    party: {
      members: []
    }
  }
};
