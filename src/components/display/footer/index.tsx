import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import IActor, { Actor } from '../../../entities/IActor';
import styles from './styles';

const generatedActor = new Actor(0, 'generated', 5);

export default ({ addActor, rollForInitiative }: {addActor(actor: IActor): void, rollForInitiative(): void}) => (
    <View style={styles.container}>
        <TouchableHighlight
        onPress={() => {addActor(generatedActor); }} style={styles.button}>
            <Text>Add</Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={() => {rollForInitiative(); }} style={styles.button}>
            <Text>Roll</Text>
        </TouchableHighlight>
    </View>
);
