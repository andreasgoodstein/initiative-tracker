import React from 'react';
import { NumberInput, Text, TextInput, TouchableHighlight, View  } from 'react-native';

import { Actor } from '../../entities/IActor';

import connect from './connect';
import styles from './styles';

export class AddActorPage<AddActorProps> extends React.PureComponent<AddActorProps> {
    constructor(props: AddActorProps) {
        super(props);

        this.state = {
            initiativeBonus: '',
            name: '',
        };
    }

    public render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Text>Add Actor</Text>
                <View style={styles.inputField}>
                    <Text>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                        />
                </View>

                <View style={styles.inputField}>
                    <Text>Initiative Bonus</Text>
                    <TextInput
                        keyboardType={'number-pad'}
                        style={styles.input}
                        onChangeText={(initiativeBonus) => this.setState({ initiativeBonus })}
                        value={this.state.initiativeBonus}
                        />
                </View>

                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.props.handleAddActor(createNewActor(this.state))}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default connect(AddActorPage);

const createNewActor = (state: object): Actor => new Actor(0, state.name, state.initiativeBonus);
