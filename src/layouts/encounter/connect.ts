import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import IActor from "../../entities/IActor";
import ActorActions from "../../reducers/actor/actor_actions";
import ActorSelectors from "../../reducers/actor/actor_selectors";
import { IApplicationState } from "../../store/state";

interface IMappedState {
  actorList: IActor[];
}

interface IDispatchState {
  handleBumpActorAction(actor: IActor): void;
  handleHighlightNextActor(): void;
  handleRemoveActorAction(actor: IActor): void;
}

export type EncounterLayoutProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
  actorList: ActorSelectors.selectAllActors(state)
});

export const mapDispatch = (
  dispatch: ThunkDispatch<IApplicationState, {}, Action>
): IDispatchState => ({
  handleBumpActorAction: (actor) => {
    dispatch(ActorActions.bumpActorToLast(actor));
  },
  handleHighlightNextActor: () => {
    dispatch(ActorActions.highlightNextActor());
  },
  handleRemoveActorAction: (actor) => {
    dispatch(ActorActions.removeActor(actor));
  }
});

export default (component: React.FunctionComponent<EncounterLayoutProps>) =>
  connect(
    mapState,
    mapDispatch
  )(component);
