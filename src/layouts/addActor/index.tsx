import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import Header from "../../components/display/header";

import connect, { AddActorProps } from "./connect";
import styles from "./styles";

const AddActorPage = ({ handleAddActor }: AddActorProps) => {
  const [actorName, setActorName] = useState("");

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Add Actor</Text>

      <Text>Name</Text>
      <View style={styles.inputFieldName}>
        <TextInput
          autoFocus={true}
          style={styles.input}
          onChangeText={(name) => {
            setActorName(name);
          }}
          onEndEditing={() => {
            handleAddActor(actorName);
          }}
          value={actorName}
        />
      </View>
    </View>
  );
};

export default connect(AddActorPage);
