import { AnyAction } from "redux";

export enum GameActionTypes {
  INCREMENT_ROUND_COUNTER = "@@game/INCREMENT_ROUND_COUNTER",
  RESET_ROUND_COUNTER = "@@game/RESET_ROUND_COUNTER",
}

const incrementRoundCounter = (): AnyAction => ({
  type: GameActionTypes.INCREMENT_ROUND_COUNTER,
});

const resetRoundCounter = (): AnyAction => ({
  type: GameActionTypes.RESET_ROUND_COUNTER,
});

export default {
  incrementRoundCounter,
  resetRoundCounter,
};
