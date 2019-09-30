import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import actions from "../../reducers/actor/actions";

interface IDispatchState {
  handleAddActor(actorName: string): void;
}

export type AddActorProps = IDispatchState;

export const mapDispatch = (
  dispatch: ThunkDispatch<{}, {}, any>
): IDispatchState => ({
  handleAddActor: (actorName) => {
    dispatch(actions.addActor(actorName));
  }
});

export default (component: React.FunctionComponent<AddActorProps>) =>
  connect(
    null,
    mapDispatch
  )(component);
