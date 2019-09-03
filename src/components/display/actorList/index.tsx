import React from 'react';
import { Alert, ScrollView, TouchableHighlight, View } from 'react-native';

import IActor from 'entities/IActor';

import Actor from '../../../components/display/actor';

import styles from './styles';

export default ({
  items,
  removeActor,
}: {
  items: IActor[];
  removeActor(actor: IActor): void;
}) => (
  <View style={styles.listContainer}>
    <ScrollView style={styles.listView}>
      {items ? getSortedActorItems(items, removeActor) : null}
    </ScrollView>
  </View>
);

const getSortedActorItems = (
  items: IActor[],
  removeActor: (actor: IActor) => void,
) => {
  const firstActor = items[0];
  if (!firstActor) {
    return [];
  }

  const sortedItems = items.filter((item) => item).sort(firstActor.sort);

  return sortedItems.map((item, index) =>
    getActorElement(item, index, removeActor),
  );
};

const getActorElement = (
  item: IActor,
  index: number,
  removeActor: (actor: IActor) => void,
) => (
  <TouchableHighlight
    key={index}
    onPress={() => {
      removeActorDialog(removeActor, item);
    }}
  >
    <Actor actor={item} />
  </TouchableHighlight>
);

const removeActorDialog = (
  removeActor: (actor: IActor) => void,
  item: IActor,
) => {
  // Works on both iOS and Android
  Alert.alert(
    `Remove ${item.name}?`,
    '',
    [
      {
        style: 'cancel',
        text: 'Cancel',
      },
      {
        onPress: () => {
          removeActor(item);
        },
        text: 'OK',
      },
    ],
    { cancelable: false },
  );
};
