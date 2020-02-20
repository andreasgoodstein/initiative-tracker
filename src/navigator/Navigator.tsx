import React from 'react';

import connect, { NavigatorProps, Page } from './connect';

import AddActorLayout from '../layouts/addActor';
import CombatLayout from '../layouts/encounter/EncounterLayout';
import PartyLayout from '../layouts/gatherParty/PartyLayout';
import RollInitiative from '../layouts/rollInitiative';

export const Navigator: React.FunctionComponent<NavigatorProps> = ({
  displayPage
}) => {
  switch (displayPage) {
    case Page.AddActor:
      return <AddActorLayout />;

    case Page.Initiative:
      return <RollInitiative />;

    case Page.Party:
      return <PartyLayout />;

    default:
      return <CombatLayout />;
  }
};

export default connect(Navigator);
