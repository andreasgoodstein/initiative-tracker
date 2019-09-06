import IActor from "../../entities/IActor";

export interface IActorState {
    readonly actorList: IActor[];
    readonly isAddingActor: boolean;
    readonly isRollingInitiative: boolean;
}

const initialActorState: IActorState = {
    actorList: [],
    isAddingActor: false,
    isRollingInitiative: false,
};

export default initialActorState;
