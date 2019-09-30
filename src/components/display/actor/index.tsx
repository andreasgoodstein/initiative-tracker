import React from "react";
import { Text, View } from "react-native";

import IActor from "../../../entities/IActor";

import styles from "./styles";

const getStyle = (actor: IActor) =>
  actor.hasActiveTurn
    ? {
        ...(styles.actorContainer as object),
        ...(styles.highlighted as object)
      }
    : styles.actorContainer;

export default ({ actor }: { actor: IActor }) => {
  return (
    <View style={getStyle(actor)}>
      <Text style={styles.actorStat}>{actor.initiative}</Text>

      <Text style={styles.actorName}>{actor.name}</Text>
    </View>
  );
};
