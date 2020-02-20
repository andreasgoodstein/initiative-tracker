import IosRefresh from 'react-ionicons/lib/IosRefresh';
import React from 'react';
import { Alert, Text, TouchableHighlight, View } from 'react-native';

import connect, { RoundCounterProps } from './connect';
import styles from './styles';

const createResetAlert = (resetRoundCounter: () => void) => {
  Alert.alert('Reset round counter?', '', [
    { style: 'cancel', text: 'Cancel' },
    {
      onPress: () => {
        resetRoundCounter();
      },
      text: 'OK'
    }
  ]);
};

export const RoundCounter = ({
  roundCount,
  resetRoundCounter
}: RoundCounterProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>Round</Text>
      <Text style={styles.counter}>{roundCount}</Text>
      <TouchableHighlight onPress={() => createResetAlert(resetRoundCounter)}>
        <IosRefresh fontSize="32px" />
      </TouchableHighlight>
    </View>
  );
};

export default connect(RoundCounter);
