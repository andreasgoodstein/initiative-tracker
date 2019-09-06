import IActor from "../../entities/IActor";
import { IApplicationState } from "../../store/state";

export default {
  selectAllActors: (state: IApplicationState): IActor[] => state.actor.actorList,
  selectIsAddingActor: (state: IApplicationState): boolean =>
    state.actor.isAddingActor,
  selectIsRollingInitiative: (state: IApplicationState): boolean =>
    state.actor.isRollingInitiative,
};
