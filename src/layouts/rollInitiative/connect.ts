import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import IActor from "../../entities/IActor";
import ActorActions from "../../reducers/actor/actor_actions";
import ActorSelectors from "../../reducers/actor/actor_selectors";
import { IApplicationState } from "../../store/state";

interface IMappedState {
  actorList: IActor[];
}

interface IDispatchState {
  handleUpdateRolls(actorList: IActor[]): void;
}

export type RollInitiativeProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
  actorList: ActorSelectors.selectAllActors(state)
});

export const mapDispatch = (dispatch: Dispatch<Action>): IDispatchState => ({
  handleUpdateRolls: (actorList) => {
    dispatch(ActorActions.updateActorRolls(actorList));
  }
});

export default (component: React.ComponentClass<RollInitiativeProps>) =>
  connect(
    mapState,
    mapDispatch
  )(component);
