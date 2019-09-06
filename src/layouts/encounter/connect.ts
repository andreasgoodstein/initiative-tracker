import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";

import IActor from "../../entities/IActor";
import { actions, selectors } from "../../reducers/actor";
import { IApplicationState } from "../../store/state";

interface IMappedState {
  actorList: IActor[];
}

interface IDispatchState {
  handleAddActorAction(): void;
  handleRemoveActorAction(actor: IActor, actorList: IActor[]): void;
  handleRollForInitiative(): void;
  handleHighlightNextActor(actorList: IActor[]): void;
}

export type EncounterLayoutProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
  actorList: selectors.selectAllActors(state)
});

export const mapDispatch = (dispatch: Dispatch<AnyAction>): IDispatchState => ({
  handleAddActorAction: () => {
    dispatch(actions.tryAddActorAction());
  },
  handleHighlightNextActor: (actorList: IActor[]) => {
    // @ts-ignore ignore array of actions type error - is handled by middleware
    dispatch(actions.highlightNextActor(actorList));
  },
  handleRemoveActorAction: (actor, actorList) => {
    // @ts-ignore ignore array of actions type error - is handled by middleware
    dispatch(actions.removeActorAction(actor, actorList));
  },
  handleRollForInitiative: () => {
    dispatch(actions.rollAllActors());
  }
});

export default (component: React.FunctionComponent<EncounterLayoutProps>) =>
  connect(
    mapState,
    mapDispatch
  )(component);
