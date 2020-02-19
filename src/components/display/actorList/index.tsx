import React from "react";
import { Alert, ScrollView, TouchableHighlight, View } from "react-native";

import IActor, { sortActors } from "../../../entities/IActor";

import Actor from "../../../components/display/actor";

import styles from "./styles";

type AlterActorFunction = (actor: IActor) => void;

export default ({
  actorList,
  removeActor,
  bumpActor
}: {
  actorList: IActor[];
  removeActor: AlterActorFunction;
  bumpActor: AlterActorFunction | undefined;
}) => (
  <View style={styles.listContainer}>
    <ScrollView style={styles.listView}>
      {actorList
        ? getSortedActorItems(actorList, removeActor, bumpActor)
        : null}
    </ScrollView>
  </View>
);

const getSortedActorItems = (
  actorList: IActor[],
  removeActor: AlterActorFunction,
  bumpActor: AlterActorFunction | undefined
) => {
  const firstActor = actorList[0];

  if (!firstActor) {
    return [];
  }

  const sortedItems = actorList.filter(Boolean).sort(sortActors);

  return sortedItems.map((actor) =>
    getActorElement(actor, removeActor, bumpActor)
  );
};

const getActorElement = (
  actor: IActor,
  removeActor: AlterActorFunction,
  bumpActor: AlterActorFunction | undefined
) => (
  <TouchableHighlight
    key={actor.id}
    onPress={() => {
      alterActionDialog(actor, removeActor, "Delete");
    }}
    onLongPress={() => {
      if (bumpActor) {
        alterActionDialog(actor, bumpActor, "Bump to last");
      }
    }}
  >
    <View>
      <Actor actor={actor} />
    </View>
  </TouchableHighlight>
);

const alterActionDialog = (
  actor: IActor,
  alterActorFunction: AlterActorFunction,
  title: string
) => {
  Alert.alert(`${title}`, `${actor.name}?`, [
    {
      style: "cancel",
      text: "Cancel"
    },
    {
      onPress: () => {
        alterActorFunction(actor);
      },
      text: "OK"
    }
  ]);
};
