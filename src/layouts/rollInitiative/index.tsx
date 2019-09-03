import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import IActor from '../../entities/IActor';
import connect from './connect';
import { RollInitiativeProps } from './connect';
import styles from './styles';

interface IPageState {
  actors: IActor[];
  actorDictionary: Map<number, IActor>;
}

class RollInitiativePage extends React.PureComponent<
  RollInitiativeProps,
  IPageState
> {
  public static getDerivedStateFromProps(
    nextProps: RollInitiativeProps,
    prevState: RollInitiativeProps,
  ) {
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

    this.getInitiativeInputField = this.getInitiativeInputField.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Roll For Initiative</Text>

          <TouchableHighlight
            style={styles.button}
            onPress={() =>
              this.handleSaveButtonPress(this.state.actorDictionary)
            }
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>

          <View style={styles.list}>
            {this.state.actors.map(this.getInitiativeInputField)}
          </View>
        </View>
      </ScrollView>
    );
  }

  private updateState(updatedActor: IActor | undefined): void {
    if (!updatedActor) {
      return;
    }

    const newActorDictionary = new Map(this.state.actorDictionary);
    newActorDictionary.set(updatedActor.id, updatedActor);

    const updatedState = {
      ...this.state,
      actorDictionary: newActorDictionary,
    };

    this.setState(updatedState);
  }

  private handleSaveButtonPress(actors: Map<number, IActor>) {
    const actorsToUpdate = Array.from(actors).map((keyValue) => keyValue[1]);

    this.props.handleUpdateRolls(actorsToUpdate);
  }

  private getInitiativeInputField(
    actor: IActor,
    index: number,
  ): React.ReactNode {
    const actorDictionary = this.state.actorDictionary;

    const getUpdatedState = (roll: string): IActor | undefined => {
      const updatedActor = actorDictionary.get(actor.id);

      if (!updatedActor) {
        return;
      }

      updatedActor.initiative = roll ? parseInt(roll, 10) : undefined;

      return updatedActor;
    };

    const displayActor = actorDictionary.get(actor.id);

    const rollValue =
      displayActor && displayActor.initiative
        ? displayActor.initiative.toString()
        : '';

    return (
      <View style={styles.inputField} key={index}>
        <Text>{actor.name}</Text>

        <TextInput
          keyboardType={'number-pad'}
          style={styles.input}
          onChangeText={(roll) => this.updateState(getUpdatedState(roll))}
          value={rollValue}
        />
      </View>
    );
  }
}

const parseActorsIntoDictionary = (actors: IActor[]): Map<number, IActor> =>
  actors.reduce((actorMap, actor) => {
    actorMap.set(actor.id, actor);
    return actorMap;
  }, new Map());

export default connect(RollInitiativePage);
