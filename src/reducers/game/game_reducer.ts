import { Reducer } from "redux";

import GameScreen from "../../entities/GameScreenEnum";
import { ActorActionType, GameActionType } from "../action_types";

import initialState, { IGameState } from "./game_state";

const gameReducer: Reducer<IGameState> = (
  gameState = initialState,
  action = { type: "" }
) => {
  switch (action.type) {
    case GameActionType.INCREMENT_ROUND_COUNTER: {
      return {
        ...gameState,
        roundCount: gameState.roundCount + 1
      };
    }

    case GameActionType.RESET_ROUND_COUNTER: {
      return {
        ...gameState,
        roundCount: 0
      };
    }

    case GameActionType.ROLL_FOR_INITIATIVE: {
      return {
        ...gameState,
        gameScreen: GameScreen.Initiative
      };
    }

    case GameActionType.FIGHT_THE_ENCOUNTER: {
      return {
        ...gameState,
        gameScreen: GameScreen.Encounter
      };
    }

    case GameActionType.GATHER_YOUR_PARTY: {
      return {
        ...gameState,
        gameScreen: GameScreen.Party
      };
    }

    case GameActionType.TRY_ADD_ACTOR: {
      return {
        ...gameState,
        gameScreen: GameScreen.AddActor
      };
    }

    case ActorActionType.ADD_ACTOR: {
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
