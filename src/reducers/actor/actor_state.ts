import IActor from "../../entities/IActor";

export interface IActorState {
    readonly actorList: IActor[];
    readonly nextActorId: number;
}

const initialActorState: IActorState = {
    actorList: [],
    nextActorId: 1,
};

export default initialActorState;
