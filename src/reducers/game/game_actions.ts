import { Action } from "redux";

export enum GameActionType {
  INCREMENT_ROUND_COUNTER = "@@game/INCREMENT_ROUND_COUNTER",
  RESET_ROUND_COUNTER = "@@game/RESET_ROUND_COUNTER",
  TRY_ADD_ACTOR = "@@game/TRY_ADD_ACTOR",
  ROLL_FOR_INITIATIVE = "@@game/ROLL_FOR_INITIATIVE",
  FIGHT_THE_ENCOUNTER = "@@game/FIGHT_THE_ENCOUNTER",
  GATHER_YOUR_PARTY = "@@game/GATHER_YOUR_PARTY"
}

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

export default {
  fightTheEncounter,
  gatherYourParty,
  incrementRoundCounter,
  resetRoundCounter,
  rollForInitiative,
  tryAddActor
};
