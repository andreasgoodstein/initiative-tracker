import React from 'react';
import { ScrollView, TouchableHighlight, View } from 'react-native';

import IActor from 'entities/IActor';

import Actor from '../../../components/display/actor';

import styles from './styles';

export default ({ items, removeActor }: {items: IActor[], removeActor(actor: IActor): void}) => (
    <View style={styles.listContainer}>
        <ScrollView style={styles.listView}>
            {items ? items.map((item, index) => (
                <TouchableHighlight key={index} onPress={() => {removeActor(item); }}>
                    <Actor actor={item} />
                </TouchableHighlight>
            )) : null}
        </ScrollView>
    </View>
);
