import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

import IActor from "../../../entities/IActor";

import styles from "./styles";

export default ({
  actorList,
  addActor,
  rollForInitiative,
  highlightNextActor
}: {
  actorList: IActor[];
  addActor(): void;
  rollForInitiative(): void;
  highlightNextActor(actorList: IActor[]): void;
}) => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={() => {
        rollForInitiative();
      }}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Roll</Text>
    </TouchableHighlight>

    <TouchableHighlight
      onPress={() => {
        addActor();
      }}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableHighlight>

    <TouchableHighlight
      onPress={() => {
        highlightNextActor(actorList);
      }}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Next</Text>
    </TouchableHighlight>
  </View>
);
