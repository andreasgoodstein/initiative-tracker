import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import IActor from '../../../entities/IActor';
import styles from './styles';

const generatedActor: IActor = {
    initiativeBonus: 5,
    name: 'generated Actor',
};

export default ({ addActor }: {addActor(actor: IActor): void}) => (
    <View style={styles.container}>
        <TouchableHighlight
        onPress={() => {addActor(generatedActor); }} style={styles.button}>
            <Text>Add</Text>
        </TouchableHighlight>
    </View>
);
