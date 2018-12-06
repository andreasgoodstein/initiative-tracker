import IActor from '../../entities/IActor';
import { IApplicationState } from '../../store/state';

export default {
    selectAllActors: (state: IApplicationState): IActor[] => state.actor.actors,
    selectIsAddingActor: (state: IApplicationState): boolean => state.actor.isAddingActor,
    selectRollingInitiativeFor: (state: IApplicationState): number | undefined => state.actor.rollingInitativeForActor,
};
