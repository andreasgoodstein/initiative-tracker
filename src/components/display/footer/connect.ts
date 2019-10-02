import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import GameActions from "../../../reducers/game/game_actions";

interface IDispatchState {
  rollForInitiative: () => void;
  fightTheEncounter: () => void;
  gatherYourParty: () => void;
}

export type FooterProps = IDispatchState;

export const mapDispatch = (dispatch: Dispatch<Action>): IDispatchState => ({
  fightTheEncounter: () => {
    dispatch(GameActions.fightTheEncounter());
  },
  gatherYourParty: () => {
    dispatch(GameActions.gatherYourParty());
  },
  rollForInitiative: () => {
    dispatch(GameActions.rollForInitiative());
  }
});

export default (component: React.FunctionComponent<FooterProps>) =>
  connect(
    null,
    mapDispatch
  )(component);
