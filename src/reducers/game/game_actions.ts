import { AnyAction } from "redux";

export enum GameActionTypes {
  INCREMENT_ROUND_COUNTER = "@@game/INCREMENT_ROUND_COUNTER",
  RESET_ROUND_COUNTER = "@@game/RESET_ROUND_COUNTER",
  TRY_ADD_ACTOR = "@@game/TRY_ADD_ACTOR",
  ROLL_FOR_INITIATIVE = "@@game/ROLL_FOR_INITIATIVE",
  FIGHT_THE_ENCOUNTER = "@@game/FIGHT_THE_ENCOUNTER",
  GATHER_YOUR_PARTY = "@@game/GATHER_YOUR_PARTY"
}

const incrementRoundCounter = (): AnyAction => ({
  type: GameActionTypes.INCREMENT_ROUND_COUNTER
});

const resetRoundCounter = (): AnyAction => ({
  type: GameActionTypes.RESET_ROUND_COUNTER
});

const rollForInitiative = (): AnyAction => ({
  type: GameActionTypes.ROLL_FOR_INITIATIVE
});

const fightTheEncounter = (): AnyAction => ({
  type: GameActionTypes.FIGHT_THE_ENCOUNTER
});

const gatherYourParty = (): AnyAction => ({
  type: GameActionTypes.GATHER_YOUR_PARTY
});

const tryAddActor = (): AnyAction => ({
  type: GameActionTypes.TRY_ADD_ACTOR
});

export default {
  fightTheEncounter,
  gatherYourParty,
  incrementRoundCounter,
  resetRoundCounter,
  rollForInitiative,
  tryAddActor
};
