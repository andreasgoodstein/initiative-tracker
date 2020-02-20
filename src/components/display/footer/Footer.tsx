import MdListBox from 'react-ionicons/lib/MdListBox';
import MdColorFilter from 'react-ionicons/lib/MdColorFilter';
import IosPeople from 'react-ionicons/lib/IosPeople';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import connect, { FooterProps } from './connect';
import styles from './styles';

export const Footer = ({
  rollForInitiative,
  fightTheEncounter,
  gatherYourParty
}: FooterProps) => (
  <View style={styles.container}>
    <TouchableHighlight style={styles.buttonFooter} onPress={gatherYourParty}>
      <IosPeople color="white" fontSize="32px" />
    </TouchableHighlight>

    <TouchableHighlight style={styles.buttonFooter} onPress={fightTheEncounter}>
      <MdColorFilter color="white" fontSize="32px" />
    </TouchableHighlight>

    <TouchableHighlight onPress={rollForInitiative} style={styles.buttonFooter}>
      <MdListBox color="white" fontSize="32px" />
    </TouchableHighlight>
  </View>
);

export default connect(Footer);
