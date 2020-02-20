import React from 'react';
import IosRedo from 'react-ionicons/lib/IosRedo';
import { TouchableHighlight } from 'react-native';

import styles from '../../../styles/components';
import connect, { NextActorButtonProps } from './connect';

export const NextActorButton = ({
  actorList,
  handleHighlightNextActor
}: NextActorButtonProps) => {
  return (
    <TouchableHighlight
      onPress={() => {
        handleHighlightNextActor(actorList);
      }}
      style={styles.button}
    >
      <IosRedo fontSize="32px" color={'white'} />
    </TouchableHighlight>
  );
};

export default connect(NextActorButton);
