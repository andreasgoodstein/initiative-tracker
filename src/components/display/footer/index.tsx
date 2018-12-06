import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import IActor, { Actor } from '../../../entities/IActor';
import styles from './styles';

const generatedActor = new Actor(0, 'generated', 5);

export default ({ addActor, rollForInitiative, highlightNextActor }:
{addActor(actor: IActor): void, rollForInitiative(): void, highlightNextActor(): void}) => (
    <View style={styles.container}>
        <TouchableHighlight
        onPress={() => {rollForInitiative(); }} style={styles.button}>
            <Text style={styles.buttonText}>Roll</Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={() => {addActor(generatedActor); }} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={() => {highlightNextActor(); }} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight>
    </View>
);
