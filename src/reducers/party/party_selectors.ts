import IActor from "../../entities/IActor";
import { IApplicationState } from "../../store/state";

const selectPartyMembers = (state: IApplicationState): IActor[] =>
  state.partyState.party.members;

export default {
  selectPartyMembers
};
