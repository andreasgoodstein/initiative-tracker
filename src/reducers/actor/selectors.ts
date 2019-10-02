import IActor from "../../entities/IActor";
import { IApplicationState } from "../../store/state";

const selectAllActors = (state: IApplicationState): IActor[] =>
  state.actorState.actorList;

export default {
  selectAllActors
};
