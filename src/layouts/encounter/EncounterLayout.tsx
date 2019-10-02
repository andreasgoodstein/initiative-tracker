import React from "react";
import { ScrollView, Text, View } from "react-native";

import ActorList from "../../components/display/actorList";
import AddActorButton from "../../components/display/AddActorButton/AddActorButton";
import Footer from "../../components/display/footer/Footer";
import Header from "../../components/display/header";
import NextActorButton from "../../components/display/NextActorButton/NextActorButton";
import RoundCounter from "../../components/display/roundcounter/roundcounter";

import connect, { EncounterLayoutProps } from "./connect";
import styles from "./styles";

export const EncounterLayout: React.FunctionComponent<EncounterLayoutProps> = ({
  actorList,
  handleRemoveActorAction,
  handleBumpActorAction
}) => {
  return (
    <View style={styles.container}>
      <Header />

      <RoundCounter />

      <View style={styles.listHeader}>
        <Text style={styles.numberText}>Initiative</Text>
        <Text style={styles.nameText}>Name</Text>
      </View>

      <ScrollView>
        <ActorList
          actorList={actorList}
          bumpActor={handleBumpActorAction}
          removeActor={handleRemoveActorAction}
        />
      </ScrollView>

      <View style={styles.addActorButton}>
        <AddActorButton />
      </View>

      <View style={styles.nextActorButton}>
        <NextActorButton />
      </View>

      <Footer />
    </View>
  );
};

export default connect(EncounterLayout);
