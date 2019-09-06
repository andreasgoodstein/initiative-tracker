import { Reducer } from "redux";
import { GameActionTypes } from "./game_actions";
import initialState, { IGameState } from "./game_state";

const gameReducer: Reducer<IGameState> = (
  gameState = initialState,
  action = { type: "" },
) => {
  switch (action.type) {
    case GameActionTypes.INCREMENT_ROUND_COUNTER: {
      return {
        ...gameState,
        roundCount: gameState.roundCount + 1,
      };
    }

    case GameActionTypes.RESET_ROUND_COUNTER: {
      return {
        ...gameState,
        roundCount: 0,
      };
    }

    default:
      return gameState;
  }
};

export default gameReducer;
