import { IActorState } from '../reducers/actor';

export interface IApplicationState {
  readonly actor: IActorState;
}

export const initialState: IApplicationState = {
  actor: {
    actors: [{
      initiativeBonus: 45,
      initiativeRoll: 3,
      name: 'StateTestActor',
    }],
  },
};
