import IActor from '../../entities/IActor';

export interface IActorState {
    readonly actors: IActor[];
    readonly isAddingActor: boolean;
    readonly rollingInitativeForActor?: number;
}

const initialState: IActorState = {
    actors: [],
    isAddingActor: false,
    rollingInitativeForActor: undefined,
};

export default initialState;
