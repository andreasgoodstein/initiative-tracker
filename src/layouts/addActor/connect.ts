import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import actorActions from "../../reducers/actor/actor_actions";
import { IApplicationState } from "../../store/state";

interface IDispatchState {
  handleAddActor(actorName: string): void;
}

export type AddActorProps = IDispatchState;

export const mapDispatch = (
  dispatch: ThunkDispatch<IApplicationState, {}, Action>
): IDispatchState => ({
  handleAddActor: (actorName) => {
    dispatch(actorActions.addActor(actorName));
  }
});

export default (component: React.FunctionComponent<AddActorProps>) =>
  connect(
    null,
    mapDispatch
  )(component);
