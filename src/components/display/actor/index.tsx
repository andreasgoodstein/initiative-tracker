import React from 'react';
import { Text, View } from 'react-native';

import IActor from '../../../entities/IActor';

import styles from './styles';

const getStyle = (actor: IActor) => actor.hasActiveTurn
    ? { ...styles.actorContainer, ...styles.highlighted }
    : styles.actorContainer;

export default ({ actor }: {actor: IActor}) => (
    <View style={getStyle(actor)}>
        <Text style={styles.actorStat}>{actor.name}</Text>
        <Text style={styles.actorStat}>{actor.initiativeBonus}</Text>
        {actor.initiativeRoll ? (<Text style={styles.actorStat}>{actor.initiativeRoll}</Text>) : <Text>0</Text>}
        {actor.initiativeTotal ? (<Text style={styles.totalStat}>{actor.initiativeTotal}</Text>) : <Text>0</Text>}
    </View>
);
