import React, { useState } from "react";
import { View } from "react-native";

import ActorList from "../../components/display/actorList";
import { AddActorButton } from "../../components/display/AddActorButton/AddActorButton";
import AddActorModal from "../../components/display/AddActorModal/AddActorModal";
import Footer from "../../components/display/footer/Footer";
import Header from "../../components/display/header";

import connect, { GatherPartyProps } from "./connect";
import styles from "./styles";

const GatherPartyLayout = ({
  partyMembers,
  handleAddActorAction,
  handleRemoveActorAction
}: GatherPartyProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      <ActorList
        actorList={partyMembers}
        removeActor={handleRemoveActorAction}
        bumpActor={undefined}
      />

      <AddActorModal
        showModal={showModal}
        hideModal={() => setShowModal(false)}
        addActor={handleAddActorAction}
      />

      <AddActorButton
        handleAddActorAction={() => {
          setShowModal(true);
        }}
      />

      <Footer />
    </View>
  );
};

export default connect(GatherPartyLayout);
