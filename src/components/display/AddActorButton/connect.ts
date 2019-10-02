import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import GameActionType from "../../../reducers/game/game_actions";

interface IDispatchState {
  handleAddActorAction(): void;
}

export type AddActorButtonProps = IDispatchState;

export const mapDispatch = (dispatch: Dispatch<Action>): IDispatchState => ({
  handleAddActorAction: () => {
    dispatch(GameActionType.tryAddActor());
  }
});

export default (component: React.FunctionComponent<AddActorButtonProps>) =>
  connect(
    null,
    mapDispatch
  )(component);
