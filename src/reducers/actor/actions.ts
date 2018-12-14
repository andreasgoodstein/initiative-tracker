import { AnyAction } from 'redux';
import IActor from '../../entities/IActor';
import generateNewActorId from '../../logic/idGenerator';

export enum ActorActionTypes {
    ADD_ACTOR = '@@actor/ADD',
    REMOVE_ACTOR = '@@actor/REMOVE',
    UPDATE_ACTOR_ROLL = '@@actor/UPDATE_ROLL',
    HIGHLIGHT_NEXT_ACTOR = '@@actor/HIGHLIGHT_NEXT',
}

export enum GameActionTypes {
    TRY_ADD_ACTOR = '@@game/ADD_ACTOR',
}

export enum CombatActionTypes {
    ROLL_FOR_ALL_ACTORS = '@@combat/ROLL_FOR_ALL',
}

export interface IActorAction extends AnyAction {
    action: IActor;
}

export interface IActorArrayAction extends AnyAction {
    action: IActor[];
}

export default {
    tryAddActorAction: (): AnyAction => ({
        type: GameActionTypes.TRY_ADD_ACTOR,
    }),

    addActorAction: (actor: IActor): IActorAction => {
        const newId = generateNewActorId();
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

    updateActorRolls: (actors: IActor[]): IActorArrayAction => ({
        action: actors,
        type: ActorActionTypes.UPDATE_ACTOR_ROLL,
    }),

    rollAllActors: (): AnyAction => ({
        type: CombatActionTypes.ROLL_FOR_ALL_ACTORS,
    }),

    highlightNextActor: (): AnyAction => ({
        type: ActorActionTypes.HIGHLIGHT_NEXT_ACTOR,
    }),
};
