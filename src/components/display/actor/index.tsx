import React from 'react';
import { Text, View } from 'react-native';

import IActor from '../../../entities/IActor';

import styles from './styles';

export default ({ actor }: {actor: IActor}) => (
    <View style={styles.actorContainer}>
        <Text style={styles.actorStat}>{actor.name}</Text>
        <Text style={styles.actorStat}>{actor.initiativeBonus}</Text>
        {actor.initiativeRoll ? (<Text style={styles.actorStat}>{actor.initiativeRoll}</Text>) : null}
        {actor.initiativeTotal ? (<Text style={styles.totalStat}>{actor.initiativeTotal}</Text>) : null}
    </View>
);
