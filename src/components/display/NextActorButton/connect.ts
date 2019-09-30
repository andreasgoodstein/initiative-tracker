import React from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";

import IActor from "../../../entities/IActor";
import { actions, selectors } from "../../../reducers/actor";
import { IApplicationState } from "../../../store/state";

interface IMappedState {
  actorList: IActor[];
}

interface IDispatchState {
  handleHighlightNextActor(actorList: IActor[]): void;
}

export type NextActorButtonProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
  actorList: selectors.selectAllActors(state)
});

export const mapDispatch = (dispatch: Dispatch<AnyAction>): IDispatchState => ({
  handleHighlightNextActor: (actorList: IActor[]) => {
    // @ts-ignore ignore array of actions type error - is handled by middleware
    dispatch(actions.highlightNextActor(actorList));
  }
});

export default (component: React.FunctionComponent<NextActorButtonProps>) =>
  connect(
    mapState,
    mapDispatch
  )(component);
