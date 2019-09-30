import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";

import styles from "../../../styles/components";

import connect, { AddActorButtonProps } from "./connect";

export const AddActorButton = ({
  handleAddActorAction
}: AddActorButtonProps) => {
  const buttonStyle = {
    ...styles.button,
    ...styles.buttonSmall
  };

  return (
    <TouchableHighlight style={buttonStyle} onPress={handleAddActorAction}>
      <Ionicons name="md-person-add" size={32} color="white" />
    </TouchableHighlight>
  );
};

export default connect(AddActorButton);
