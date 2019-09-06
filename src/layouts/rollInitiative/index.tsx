import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

import IActor from "../../entities/IActor";
import connect from "./connect";
import { RollInitiativeProps } from "./connect";
import styles from "./styles";

interface IPageState {
  actorList: IActor[];
  actorDictionary: Map<number, IActor>;
}

class RollInitiativePage extends React.PureComponent<
  RollInitiativeProps,
  IPageState
> {
  public static getDerivedStateFromProps(
    nextProps: RollInitiativeProps,
    prevState: RollInitiativeProps
  ) {
    if (nextProps.actorList !== prevState.actorList) {
      return {
        ...prevState,
        actorDictionary: parseActorsIntoDictionary(nextProps.actorList),
        actorList: nextProps.actorList
      };
    } else {
      return null;
    }
  }

  constructor(props: RollInitiativeProps) {
    super(props);

    this.state = {
      actorDictionary: parseActorsIntoDictionary(this.props.actorList),
      actorList: this.props.actorList
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
            {this.state.actorList.map(this.getInitiativeInputField)}
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
      actorDictionary: newActorDictionary
    };

    this.setState(updatedState);
  }

  private handleSaveButtonPress(actorList: Map<number, IActor>) {
    const actorsToUpdate = Array.from(actorList).map((keyValue) => keyValue[1]);

    this.props.handleUpdateRolls(actorsToUpdate);
  }

  private getInitiativeInputField(actor: IActor): React.ReactNode {
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
        : "";

    return (
      <View
        style={styles.inputField}
        key={actor.id}
      >
        <Text>{actor.name}</Text>

        <TextInput
          keyboardType={"number-pad"}
          style={styles.input}
          onChangeText={(roll) => this.updateState(getUpdatedState(roll))}
          value={rollValue}
        />
      </View>
    );
  }
}

const parseActorsIntoDictionary = (actorList: IActor[]): Map<number, IActor> =>
  actorList.reduce((actorMap, actor) => {
    actorMap.set(actor.id, actor);
    return actorMap;
  }, new Map());

export default connect(RollInitiativePage);
