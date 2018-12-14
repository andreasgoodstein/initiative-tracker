import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import styles from './styles';

export default ({ addActor, rollForInitiative, highlightNextActor }:
{addActor(): void, rollForInitiative(): void, highlightNextActor(): void}) => (
    <View style={styles.container}>
        <TouchableHighlight
            onPress={() => {rollForInitiative(); }} style={styles.button}>
            <Text style={styles.buttonText}>Roll</Text>
        </TouchableHighlight>

        <TouchableHighlight
            onPress={() => {addActor(); }} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        <TouchableHighlight
            onPress={() => {highlightNextActor(); }} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight>
    </View>
);
