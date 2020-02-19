import { Reducer } from "redux";

import { PartyActionType } from "../action_types";
import { IPartyAction } from "./party_actions";
import initialPartyState, { IPartyState } from "./party_state";

const partyReducer: Reducer<IPartyState> = (
  partyState = initialPartyState,
  action = { type: "" }
) => {
  switch (action.type) {
    case PartyActionType.ADD_PARTY_MEMBER: {
      const {
        party,
        party: { members }
      } = partyState;

      const {
        payload: { newActor }
      } = action;

      return {
        ...partyState,
        party: {
          ...party,
          members: [...members, newActor]
        }
      };
    }

    case PartyActionType.REMOVE_PARTY_MEMBER: {
      const removeAction = action as IPartyAction;
      const { party } = partyState;
      const { members } = removeAction.payload;

      return {
        ...partyState,
        party: {
          ...party,
          members
        }
      };
    }

    default:
      return partyState;
  }
};

export default partyReducer;
