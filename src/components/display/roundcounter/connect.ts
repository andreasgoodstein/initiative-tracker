import { Dispatch } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { gameActions, gameSelectors } from "../../../reducers/game";
import { IApplicationState } from "../../../store/state";

interface IMappedState {
  roundCount: number;
}

interface IDispatchState {
  resetRoundCounter(): void;
}

const mappedState = (state: IApplicationState): IMappedState => ({
  roundCount: gameSelectors.selectRoundCount(state)
});

const dispatchState = (dispatch: Dispatch<Action>): IDispatchState => ({
  resetRoundCounter: () => dispatch(gameActions.resetRoundCounter())
});

export type RoundCounterProps = IMappedState & IDispatchState;

export default (component: React.FunctionComponent<RoundCounterProps>) =>
  connect(
    mappedState,
    dispatchState
  )(component);
