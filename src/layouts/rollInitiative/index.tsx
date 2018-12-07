import React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';

import IActor from '../../entities/IActor';
import connect from './connect';
import { RollInitiativeProps } from './connect';
import styles from './styles';

interface IStateActor {
    [id: number]: IActor;
}
interface IPageState {
    actors: IActor[];
    actorDictionary: IStateActor;
}

const parseActorsIntoDictionary = (actors: IActor[]): IStateActor => actors.reduce((obj, actor) => {
    obj[actor.id] = actor;
    return obj;
}, {} as IStateActor);

class RollInitiativePage extends React.PureComponent<RollInitiativeProps, IPageState> {
    public static getDerivedStateFromProps(nextProps: RollInitiativeProps, prevState: RollInitiativeProps) {
        if (nextProps.actors !== prevState.actors) {
          return {
                ...prevState,
                actorDictionary: parseActorsIntoDictionary(nextProps.actors),
                actors: nextProps.actors,
            };
        } else {
            return null;
        }
    }

    constructor(props: RollInitiativeProps) {
        super(props);

        this.state = {
            actorDictionary: parseActorsIntoDictionary(this.props.actors),
            actors: this.props.actors,
        };
    }

    public render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Text>Roll For Initiative</Text>

                <View>
                    {this.state.actors.map(getInitiativeInputField.bind(null, this.updateState.bind(this), this.state))}
                </View>

                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.handleSaveButtonPress(this.state.actorDictionary)}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        );
    }

    private updateState(updatedActor: IActor): void {
        const updatedState = {
            ...this.state,
            actorDictionary: {
                ...this.state.actorDictionary,
                [updatedActor.id]: updatedActor,
            },
        };

        this.setState(updatedState);
    }

    private handleSaveButtonPress(actors: IStateActor) {
        const actorsToUpdate = Object.keys(actors).map((key) => actors[key]);

        this.props.handleUpdateRolls(actorsToUpdate);
    }
}

export default connect(RollInitiativePage);

const getInitiativeInputField =
    (updateState: (actor: IActor) => void, state: IPageState, actor: IActor, index: number ): React.ReactNode => {
    const getUpdatedState = (roll: string): IActor => {
        const updatedActor = state.actorDictionary[actor.id];
        updatedActor.initiativeRoll = roll;

        return updatedActor;
    };

    return (
        <View style={styles.inputField} key={index}>
            <Text>{actor.name}</Text>
            <TextInput
                keyboardType={'number-pad'}
                style={styles.input}
                onChangeText={(roll) => updateState(getUpdatedState(roll))}
                value={state.actorDictionary[actor.id].initiativeRoll}
                />
        </View>
    );
};
