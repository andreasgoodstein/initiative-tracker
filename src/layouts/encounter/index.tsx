import React from 'react';
import { Text, View } from 'react-native';

import ActorList from '../../components/display/actorList';
import Footer from '../../components/display/footer';
import Header from '../../components/display/header';

import connect, { EncounterLayoutProps } from './connect';
import styles from './styles';

export const EncounterLayout: React.SFC<EncounterLayoutProps> =
({ items, handleAddActorAction, handleRemoveActorAction, handleRollForInitiative, handleHighlightNextActor }) => (
    <View style={styles.container}>
        <Header />

        <View style={styles.listHeader}>
            <Text style={styles.nameText}>Name</Text>
            <Text style={styles.numberText}>Bonus</Text>
            <Text style={styles.numberText}>Roll</Text>
            <Text style={styles.numberText}>Initiative</Text>
        </View>

        <ActorList items={items} removeActor={handleRemoveActorAction}/>

        <Footer
            addActor={handleAddActorAction}
            rollForInitiative={handleRollForInitiative}
            highlightNextActor={handleHighlightNextActor}
            />
    </View>
);

export default connect(EncounterLayout);
