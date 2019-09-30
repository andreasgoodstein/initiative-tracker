import React from "react";
import { Alert, ScrollView, TouchableHighlight, View } from "react-native";

import IActor, { sortActors } from "../../../entities/IActor";

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

  const sortedItems = actorList.filter(Boolean).sort(sortActors);

  return sortedItems.map((actor) =>
    getActorElement(actorList, actor, removeActor)
  );
};

const getActorElement = (
  actorList: IActor[],
  actor: IActor,
  removeActor: RemoveActorFunction
) => (
  <TouchableHighlight
    key={actor.id}
    onPress={() => {
      removeActorDialog(actorList, actor, removeActor);
    }}
  >
    <View>
      <Actor actor={actor} />
    </View>
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
