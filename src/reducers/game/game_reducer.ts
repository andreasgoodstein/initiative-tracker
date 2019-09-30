import { Reducer } from "redux";

import GameScreen from "../../entities/GameScreenEnum";
import { ActorActionTypes } from "./../actor/actions";

import { GameActionTypes } from "./game_actions";
import initialState, { IGameState } from "./game_state";

const gameReducer: Reducer<IGameState> = (
  gameState = initialState,
  action = { type: "" }
) => {
  switch (action.type) {
    case GameActionTypes.INCREMENT_ROUND_COUNTER: {
      return {
        ...gameState,
        roundCount: gameState.roundCount + 1
      };
    }

    case GameActionTypes.RESET_ROUND_COUNTER: {
      return {
        ...gameState,
        roundCount: 0
      };
    }

    case GameActionTypes.ROLL_FOR_INITIATIVE: {
      return {
        ...gameState,
        gameScreen: GameScreen.Initiative
      };
    }

    case GameActionTypes.FIGHT_THE_ENCOUNTER: {
      return {
        ...gameState,
        gameScreen: GameScreen.Encounter
      };
    }

    case GameActionTypes.GATHER_YOUR_PARTY: {
      return {
        ...gameState,
        gameScreen: GameScreen.Party
      };
    }

    case GameActionTypes.TRY_ADD_ACTOR: {
      return {
        ...gameState,
        gameScreen: GameScreen.AddActor
      };
    }

    case ActorActionTypes.ADD_ACTOR: {
      return {
        ...gameState,
        gameScreen: GameScreen.Encounter
      };
    }

    default:
      return gameState;
  }
};

export default gameReducer;
