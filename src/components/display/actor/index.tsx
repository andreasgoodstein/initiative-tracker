import React from 'react';
import { Text, View } from 'react-native';

import IActor from '../../../entities/IActor';

import styles from './styles';

const getStyle = (actor: IActor) =>
  actor.hasActiveTurn
    ? {
        ...(styles.actorContainer as object),
        ...(styles.highlighted as object),
      }
    : styles.actorContainer;

export default ({ actor }: { actor: IActor }) => (
  <View style={getStyle(actor)}>
    <Text style={styles.actorName}>{actor.name}</Text>

    {actor.initiative ? (
      <Text style={styles.actorStat}>{actor.initiative}</Text>
    ) : (
      <Text style={styles.actorStat}>0</Text>
    )}
  </View>
);
