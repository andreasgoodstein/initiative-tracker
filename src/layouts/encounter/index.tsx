import React from 'react';
import { View } from 'react-native';

import ActorList from '../../components/display/actorList';
import Footer from '../../components/display/footer';
import Header from '../../components/display/header';

import connect, { EncounterLayoutProps } from './connect';
import styles from './styles';

export const EncounterLayout: React.SFC<EncounterLayoutProps> = ({ items, handleAddActorAction, handleRemoveActorAction }) => (
    <View style={styles.container}>
        <Header />

        <ActorList items={items} removeActor={handleRemoveActorAction}/>

        <Footer addActor={handleAddActorAction}/>
    </View>
);

export default connect(EncounterLayout);
