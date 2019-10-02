import { Reducer } from "redux";

import initialPartyState, { IPartyState } from "./party_state";

const partyReducer: Reducer<IPartyState> = (
  gameState = initialPartyState,
  action = { type: "" }
) => {
  switch (action.type) {
    default:
      return gameState;
  }
};

export default partyReducer;
