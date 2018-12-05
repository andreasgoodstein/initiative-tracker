import IActor from '../../entities/IActor';
import { IApplicationState } from '../../store/state';

export default {
    selectAllActors: (state: IApplicationState): IActor[] => state.actor.actors,
};
