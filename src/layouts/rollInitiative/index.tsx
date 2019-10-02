import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

import Footer from "../../components/display/footer/Footer";
import Header from "../../components/display/header";
import IActor from "../../entities/IActor";

import connect, { RollInitiativeProps } from "./connect";
import styles from "./styles";

interface IPageState {
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
    };
  }

  public render() {
    const { actorList } = this.props;

    const alphabeticalActorList = [...actorList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    const actorListElements = alphabeticalActorList.map(
      this.getInitiativeInputField
    );

    return (
      <View style={styles.container}>
        <Header />

        <Text style={styles.title}>Roll For Initiative</Text>

        <ScrollView>
          <View style={styles.list}>{actorListElements}</View>
        </ScrollView>

        <Footer />
      </View>
    );
  }

  private updateState(updatedActor: IActor | undefined): void {
    if (!updatedActor) {
      return;
    }

    const newActorDictionary = new Map(this.state.actorDictionary);
    newActorDictionary.set(updatedActor.id, updatedActor);

    const updatedState = {
      actorDictionary: newActorDictionary
    };

    this.setState(updatedState);
  }

  private getInitiativeInputField = (actor: IActor): React.ReactNode => {
    const actorDictionary = this.state.actorDictionary;

    const getUpdatedState = (roll: string): IActor | undefined => {
      const updatedActor = actorDictionary.get(actor.id);

      if (!updatedActor) {
        return;
      }

      updatedActor.initiative = roll ? parseInt(roll, 10) : 0;

      return updatedActor;
    };

    const displayActor = actorDictionary.get(actor.id);

    const rollValue = displayActor ? displayActor.initiative.toString() : "";

    return (
      <View style={styles.inputField} key={actor.id}>
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
