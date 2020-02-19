import React from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import IActor from "../../../entities/IActor";
import ActorAction from "../../../reducers/actor/actor_actions";
import ActorSelectors from "../../../reducers/actor/actor_selectors";
import { IApplicationState } from "../../../store/state";

interface IMappedState {
  actorList: IActor[];
}

interface IDispatchState {
  handleHighlightNextActor(actorList: IActor[]): void;
}

export type NextActorButtonProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
  actorList: ActorSelectors.selectAllActors(state)
});

export const mapDispatch = (
  dispatch: ThunkDispatch<IApplicationState, {}, Action>
): IDispatchState => ({
  handleHighlightNextActor: () => {
    dispatch(ActorAction.highlightNextActor());
  }
});

export default (component: React.FunctionComponent<NextActorButtonProps>) =>
  connect(
    mapState,
    mapDispatch
  )(component);
