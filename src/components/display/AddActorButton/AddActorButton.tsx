import MdPersonAdd from 'react-ionicons/lib/MdPersonAdd';
import React from 'react';
import { TouchableHighlight } from 'react-native';

import styles from '../../../styles/components';

import connect, { AddActorButtonProps } from './connect';

export const AddActorButton = ({
  handleAddActorAction
}: AddActorButtonProps) => {
  const buttonStyle = {
    ...styles.button,
    ...styles.buttonSmall
  };

  return (
    <TouchableHighlight style={buttonStyle} onPress={handleAddActorAction}>
      <MdPersonAdd fontSize="32px" color="white" />
    </TouchableHighlight>
  );
};

export default connect(AddActorButton);
