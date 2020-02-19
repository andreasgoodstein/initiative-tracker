import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import IActor from "../../entities/IActor";
import PartyActions from "../../reducers/party/party_actions";
import PartySelectors from "../../reducers/party/party_selectors";
import { IApplicationState } from "../../store/state";

interface IMappedState {
  partyMembers: IActor[];
}

interface IDispatchState {
  handleAddActorAction(actorName: string): void;
  handleRemoveActorAction(actor: IActor): void;
}

export type GatherPartyProps = IMappedState & IDispatchState;

export const mapState = (state: IApplicationState): IMappedState => ({
  partyMembers: PartySelectors.selectPartyMembers(state)
});

export const mapDispatch = (
  dispatch: ThunkDispatch<IApplicationState, {}, Action>
): IDispatchState => ({
  handleAddActorAction: (actorName) => {
    dispatch(PartyActions.addPartyMember(actorName));
  },
  handleRemoveActorAction: (actor) => {
    dispatch(PartyActions.removePartyMember(actor));
  }
});

export default (component: React.FunctionComponent<GatherPartyProps>) =>
  connect(
    mapState,
    mapDispatch
  )(component);
