import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IApplicationState } from "store/state";

import { ActorActionType, GameActionType } from "../action_types";

const incrementRoundCounter = (): Action => ({
  type: GameActionType.INCREMENT_ROUND_COUNTER
});

const resetRoundCounter = (): Action => ({
  type: GameActionType.RESET_ROUND_COUNTER
});

const rollForInitiative = (): Action => ({
  type: GameActionType.ROLL_FOR_INITIATIVE
});

const fightTheEncounter = (): Action => ({
  type: GameActionType.FIGHT_THE_ENCOUNTER
});

const gatherYourParty = (): Action => ({
  type: GameActionType.GATHER_YOUR_PARTY
});

const tryAddActor = (): Action => ({
  type: GameActionType.TRY_ADD_ACTOR
});

const startAnEncounter = (): ThunkAction<
  void,
  IApplicationState,
  {},
  Action
> => (dispatch, getState) => {
  const {
    partyState: {
      party: { members }
    }
  } = getState();

  dispatch({
    type: GameActionType.START_AN_ENCOUNTER
  });

  dispatch({
    payload: { actorList: members },
    type: ActorActionType.UPDATE_ACTOR_LIST
  });

  dispatch({
    type: GameActionType.FIGHT_THE_ENCOUNTER
  });
};

export default {
  fightTheEncounter,
  gatherYourParty,
  incrementRoundCounter,
  resetRoundCounter,
  rollForInitiative,
  startAnEncounter,
  tryAddActor
};
