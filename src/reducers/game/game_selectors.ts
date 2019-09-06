import { IApplicationState } from "../../store/state";

const selectRoundCount = (state: IApplicationState): number =>
  state.gameState.roundCount;

export default {
  selectRoundCount,
};
