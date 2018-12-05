import { AnyAction } from 'redux';
import IActor from '../../entities/IActor';

export interface IActorAction extends AnyAction {
    action: IActor;
}

export default {
    addActorAction: (actor: IActor): IActorAction => ({
        action: actor,
        type: '@@actor/ADD',
    }),

    removeActorAction: (actor: IActor): IActorAction => ({
        action: actor,
        type: '@@actor/REMOVE',
    }),

    updateActorAction: (actor: IActor): IActorAction => ({
        action: actor,
        type: '@@actor/UPDATE',
    }),
};
