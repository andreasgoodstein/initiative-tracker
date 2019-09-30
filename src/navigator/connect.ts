import { connect } from "react-redux";

import GameScreen from "../entities/GameScreenEnum";
import { IApplicationState } from "../store/state";

interface INavigatorState {
  displayPage: Page;
}

export type NavigatorProps = INavigatorState;

export enum Page {
  AddActor = "AddActor",
  Initiative = "Initiative",
  Encounter = "Encounter",
  Party = "Party"
}

export const mapState = (state: IApplicationState): INavigatorState => {
  switch (state.gameState.gameScreen) {
    case GameScreen.Initiative: {
      return {
        displayPage: Page.Initiative
      };
    }

    case GameScreen.Party: {
      return {
        displayPage: Page.Party
      };
    }

    case GameScreen.AddActor: {
      return {
        displayPage: Page.AddActor
      };
    }

    default:
      return {
        displayPage: Page.Encounter
      };
  }
};

export default (component: React.FunctionComponent<NavigatorProps>) =>
  connect(mapState)(component);
