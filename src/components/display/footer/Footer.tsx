import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight, View } from "react-native";

import connect, { FooterProps } from "./connect";
import styles from "./styles";

export const Footer = ({
  rollForInitiative,
  fightTheEncounter,
  gatherYourParty
}: FooterProps) => (
  <View style={styles.container}>
    <TouchableHighlight style={styles.buttonFooter} onPress={gatherYourParty}>
      <Ionicons name="ios-people" color="white" size={32} />
    </TouchableHighlight>

    <TouchableHighlight style={styles.buttonFooter} onPress={fightTheEncounter}>
      <Ionicons name="md-color-filter" color="white" size={32} />
    </TouchableHighlight>

    <TouchableHighlight onPress={rollForInitiative} style={styles.buttonFooter}>
      <Ionicons name="md-list-box" color="white" size={32} />
    </TouchableHighlight>
  </View>
);

export default connect(Footer);
