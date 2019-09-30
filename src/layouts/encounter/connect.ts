import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";

import IActor from "../../entities/IActor";
import { actions, selectors } from "../../reducers/actor";
import { IApplicationState } from "../../store/state";

interface IMappedState {
  actorList: IActor[];
}

interface IDispatchState {
  handleRemoveActorAction(actor: IActor): void;
  handleHighlightNextActor(): void;
}

export type EncounterLayoutProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
  actorList: selectors.selectAllActors(state)
});

export const mapDispatch = (dispatch: Dispatch<AnyAction>): IDispatchState => ({
  handleHighlightNextActor: () => {
    // @ts-ignore ignore array of actions type error - is handled by middleware
    dispatch(actions.highlightNextActor());
  },
  handleRemoveActorAction: (actor) => {
    // @ts-ignore ignore array of actions type error - is handled by middleware
    dispatch(actions.removeActor(actor));
  }
});

export default (component: React.FunctionComponent<EncounterLayoutProps>) =>
  connect(
    mapState,
    mapDispatch
  )(component);
