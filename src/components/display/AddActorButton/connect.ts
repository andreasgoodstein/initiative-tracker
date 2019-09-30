import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";

import GameActionTypes from "../../../reducers/game/game_actions";

interface IDispatchState {
  handleAddActorAction(): void;
}

export type AddActorButtonProps = IDispatchState;

export const mapDispatch = (dispatch: Dispatch<AnyAction>): IDispatchState => ({
  handleAddActorAction: () => {
    dispatch(GameActionTypes.tryAddActor());
  }
});

export default (component: React.FunctionComponent<AddActorButtonProps>) =>
  connect(
    null,
    mapDispatch
  )(component);
