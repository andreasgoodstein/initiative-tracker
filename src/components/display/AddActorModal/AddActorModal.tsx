import React, { useState } from "react";
import { Modal, Text, TextInput, View } from "react-native";

import styles from "./styles";

interface IAddActorModal {
  showModal: boolean;
  hideModal: () => void;
  addActor: (actorName: string) => void;
}

const AddActorModal = ({ showModal, hideModal, addActor }: IAddActorModal) => {
  const [actorName, setActorName] = useState("");

  return (
    <Modal animationType="slide" transparent={false} visible={showModal}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Actor</Text>

        <TextInput
          autoFocus={true}
          onChangeText={(name) => {
            setActorName(name);
          }}
          onEndEditing={() => {
            addActor(actorName);
            setActorName("");
            hideModal();
          }}
          style={styles.inputFieldName}
          value={actorName}
        />
      </View>
    </Modal>
  );
};

export default AddActorModal;
