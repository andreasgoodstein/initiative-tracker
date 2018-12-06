import React from 'react';
import { ScrollView, TouchableHighlight, View } from 'react-native';

import IActor from 'entities/IActor';

import Actor from '../../../components/display/actor';

import styles from './styles';

export default ({ items, removeActor }: {items: IActor[], removeActor(actor: IActor): void}) => (
    <View style={styles.listContainer}>
        <ScrollView style={styles.listView}>
            {items ? getSortedActorItems(items, removeActor) : null}
        </ScrollView>
    </View>
);

const getSortedActorItems = (items: IActor[], removeActor: (actor: IActor) => void) => {
    const sortedItems = items.filter((item) => item).sort((a, b) =>
        (b.initiativeTotal || 0) - (a.initiativeTotal || 0));

    return sortedItems.map((item, index) => getActorHighlight(item, index, removeActor));
};

const getActorHighlight = (item: IActor, index: number, removeActor: (actor: IActor) => void) => (
    <TouchableHighlight key={index} onPress={() => {removeActor(item); }}>
        <Actor actor={item} />
    </TouchableHighlight>
);
