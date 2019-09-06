import { connect } from "react-redux";
import { IApplicationState } from "../store/state";

interface INavigatorState {
    displayPage: Page;
}

export type NavigatorProps = INavigatorState;

export enum Page {
    AddActor = "AddActor",
    RollInitiative = "RollInitiative",
    Combat = "Combat",
}

export const mapState = (state: IApplicationState): INavigatorState => {

    if (state.actor.isAddingActor) {
        return {
            displayPage: Page.AddActor,
        };
    }

    if (state.actor.isRollingInitiative) {
        return {
            displayPage: Page.RollInitiative,
        };
    }

    return {
        displayPage: Page.Combat,
    };
};

export default (component: React.FunctionComponent<NavigatorProps>) => connect(mapState)(component);
