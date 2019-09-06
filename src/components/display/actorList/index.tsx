import React from "react";
import { Alert, ScrollView, TouchableHighlight, View } from "react-native";

import IActor from "entities/IActor";

import Actor from "../../../components/display/actor";

import styles from "./styles";

type RemoveActorFunction = (actor: IActor, actorList: IActor[]) => void;

export default ({
  actorList,
  removeActor
}: {
  actorList: IActor[];
  removeActor: RemoveActorFunction;
}) => (
  <View style={styles.listContainer}>
    <ScrollView style={styles.listView}>
      {actorList ? getSortedActorItems(actorList, removeActor) : null}
    </ScrollView>
  </View>
);

const getSortedActorItems = (
  actorList: IActor[],
  removeActor: RemoveActorFunction
) => {
  const firstActor = actorList[0];
  if (!firstActor) {
    return [];
  }

  const sortedItems = actorList.filter(Boolean).sort(firstActor.sort);

  return sortedItems.map((actor, index) =>
    getActorElement(actorList, actor, index, removeActor)
  );
};

const getActorElement = (
  actorList: IActor[],
  actor: IActor,
  index: number,
  removeActor: RemoveActorFunction
) => (
  <TouchableHighlight
    key={index}
    onPress={() => {
      removeActorDialog(actorList, actor, removeActor);
    }}
  >
    <Actor actor={actor} />
  </TouchableHighlight>
);

const removeActorDialog = (
  actorList: IActor[],
  actor: IActor,
  removeActor: RemoveActorFunction
) => {
  // Works on both iOS and Android
  Alert.alert(`Remove ${actor.name}?`, "", [
    {
      style: "cancel",
      text: "Cancel"
    },
    {
      onPress: () => {
        removeActor(actor, actorList);
      },
      text: "OK"
    }
  ]);
};
