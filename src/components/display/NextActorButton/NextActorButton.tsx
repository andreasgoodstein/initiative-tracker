import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";

import styles from "../../../styles/components";
import connect, { NextActorButtonProps } from "./connect";

export const NextActorButton = ({
  actorList,
  handleHighlightNextActor
}: NextActorButtonProps) => {
  return (
    <TouchableHighlight
      onPress={() => {
        handleHighlightNextActor(actorList);
      }}
      style={styles.button}
    >
      <Ionicons name={"ios-redo"} size={32} color={"white"} />
    </TouchableHighlight>
  );
};

export default connect(NextActorButton);
