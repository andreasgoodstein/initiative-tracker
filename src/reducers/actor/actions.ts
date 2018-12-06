import { AnyAction } from 'redux';
import IActor from '../../entities/IActor';
import generateNewActorId from '../../logic/idGenerator';

export enum ActorActionTypes {
    ADD_ACTOR = '@@actor/ADD',
    REMOVE_ACTOR = '@@actor/REMOVE',
    ROLL_FOR_ALL_ACTORS = '@@actor/ROLL_FOR_ALL',
    HIGHLIGHT_NEXT_ACTOR = '@@actor/HIGHLIGHT_NEXT',
}

export enum GameActionTypes {
    ROLL_FOR_PLAYER = '@@game/ROLL_FOR_PLAYER',
    TRY_ADD_ACTOR = '@@game/ADD_ACTOR',
}

export interface IActorAction extends AnyAction {
    action: IActor;
}

export default {
    tryAddActorAction: (): AnyAction => ({
        type: GameActionTypes.TRY_ADD_ACTOR,
    }),

    tryRollForPlayer: (): AnyAction => ({
        type: GameActionTypes.ROLL_FOR_PLAYER,
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

    rollAllActors: (): AnyAction => ({
        type: ActorActionTypes.ROLL_FOR_ALL_ACTORS,
    }),

    highlightNextActor: (): AnyAction => ({
        type: ActorActionTypes.HIGHLIGHT_NEXT_ACTOR,
    }),
};
