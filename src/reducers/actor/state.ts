import IActor from '../../entities/IActor';

export interface IActorState {
    readonly actors: IActor[];
    readonly isAddingActor: boolean;
    readonly isRollingInitiative: boolean;
}

const initialState: IActorState = {
    actors: [],
    isAddingActor: false,
    isRollingInitiative: false,
};

export default initialState;
