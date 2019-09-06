import React from "react";
import { ScrollView, Text, View } from "react-native";

import ActorList from "../../components/display/actorList";
import Footer from "../../components/display/footer";
import Header from "../../components/display/header";
import RoundCounter from "../../components/display/roundcounter/roundcounter";

import connect, { EncounterLayoutProps } from "./connect";
import styles from "./styles";

export const EncounterLayout: React.FunctionComponent<EncounterLayoutProps> = ({
  actorList,
  handleAddActorAction,
  handleRemoveActorAction,
  handleRollForInitiative,
  handleHighlightNextActor
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />

        <RoundCounter />

        <Footer
          actorList={actorList}
          addActor={handleAddActorAction}
          rollForInitiative={handleRollForInitiative}
          highlightNextActor={handleHighlightNextActor}
        />

        <View style={styles.listHeader}>
          <Text style={styles.nameText}>Name</Text>
          <Text style={styles.numberText}>Initiative</Text>
        </View>

        <ActorList
          actorList={actorList}
          removeActor={handleRemoveActorAction}
        />
      </View>
    </ScrollView>
  );
};

export default connect(EncounterLayout);
