import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import IActor, { Actor } from "../../entities/IActor";
import { IApplicationState } from "../../store/state";
import { PartyActionType } from "../action_types";

export interface IPartyMemberAction extends Action {
  payload: { newActor: IActor };
}

export interface IPartyAction extends Action {
  payload: { members: IActor[] };
}

const addPartyMember = (
  newActorName: string
): ThunkAction<void, IApplicationState, {}, IPartyMemberAction> => (
  dispatch,
  getState
) => {
  const {
    partyState: {
      party: { members }
    }
  } = getState();

  const highestMemberId = members.reduce((highestId, member) => {
    return member.id > highestId ? member.id : highestId;
  }, 0);

  const nextMemberId = highestMemberId + 1;

  const newActor = new Actor(nextMemberId, newActorName);

  dispatch({
    payload: { newActor },
    type: PartyActionType.ADD_PARTY_MEMBER
  });
};

const removePartyMember = (
  removeActor: IActor
): ThunkAction<void, IApplicationState, {}, IPartyAction> => {
  return (dispatch, getState) => {
    const {
      partyState: {
        party: { members }
      }
    } = getState();

    const newPartyMembers = members.filter(
      (member) => member.id !== removeActor.id
    );

    dispatch({
      payload: { members: newPartyMembers },
      type: PartyActionType.REMOVE_PARTY_MEMBER
    });
  };
};

export default {
  addPartyMember,
  removePartyMember
};
