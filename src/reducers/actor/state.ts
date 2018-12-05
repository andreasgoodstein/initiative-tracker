import IActor from '../../entities/IActor';

export interface IActorState {
    readonly actors: IActor[];
}

const initialState: IActorState = {
    actors: [],
};

export default initialState;
