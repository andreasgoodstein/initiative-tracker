import { IActorState } from '../reducers/actor';

export interface IApplicationState {
  readonly actor: IActorState;
}

export const initialState: IApplicationState = {
  actor: {
    actors: [],
    isAddingActor: false,
    isRollingInitiative: false,
  },
};
