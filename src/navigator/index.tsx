import React from "react";

import connect, { NavigatorProps, Page } from "./connect";

import AddActorLayout from "../layouts/addActor";
import CombatLayout from "../layouts/encounter";
import RollInitiative from "../layouts/rollInitiative";

export const Navigator: React.FunctionComponent<NavigatorProps> = ({ displayPage }) => {
    switch (displayPage) {

        case Page.AddActor:
            return <AddActorLayout></AddActorLayout>;

        case Page.RollInitiative:
            return <RollInitiative></RollInitiative>;

        default:
            return <CombatLayout></CombatLayout>;
    }
};

export default connect(Navigator);
