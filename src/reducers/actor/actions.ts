import { AnyAction } from 'redux';
import IActor from '../../entities/IActor';

export enum ActorActionTypes {
    ADD_ACTOR = '@@actor/ADD',
    REMOVE_ACTOR = '@@actor/REMOVE',
    ROLL_FOR_ALL_ACTORS = '@@actor/ROLL_FOR_ALL',
}

export interface IActorAction extends AnyAction {
    action: IActor;
}

export default {
    addActorAction: (actor: IActor): IActorAction => {
        const newId = getNextActorId();
        const newActor = actor.clone(newId);

        return {
            action: newActor,
            type: ActorActionTypes.ADD_ACTOR,
        };
    },

    removeActorAction: (actor: IActor): IActorAction => ({
        action: actor,
        type: ActorActionTypes.REMOVE_ACTOR,
    }),

    rollAllActors: (): AnyAction => ({
        type: ActorActionTypes.ROLL_FOR_ALL_ACTORS,
    }),
};

// Clojure that returns a new id on each call
const getNextActorId = (() => {
    let runningId: number = 0;

    return (): number => {
        runningId += 1;
        return runningId;
    };
})();
