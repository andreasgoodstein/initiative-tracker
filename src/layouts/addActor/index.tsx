import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import { Actor } from '../../entities/IActor';

import connect, { AddActorProps } from './connect';
import styles from './styles';

interface IAddActorPageState {
  initiativeBonus: string;
  name: string;
}

export class AddActorPage extends React.PureComponent<
  AddActorProps,
  IAddActorPageState
> {
  constructor(props: AddActorProps) {
    super(props);

    this.state = {
      initiativeBonus: '',
      name: '',
    };
  }

  public render(): React.ReactNode {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Add Actor</Text>

          <Text>Name</Text>
          <View style={styles.inputFieldName}>
            <TextInput
              style={styles.input}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            />
          </View>

          <Text>Initiative Bonus</Text>
          <View style={styles.inputFieldNumber}>
            <TextInput
              keyboardType={'number-pad'}
              style={styles.input}
              onChangeText={(initiativeBonus) =>
                this.setState({ ...this.state, initiativeBonus })
              }
              value={this.state.initiativeBonus.toString()}
            />
          </View>

          <TouchableHighlight
            style={styles.button}
            onPress={() =>
              this.props.handleAddActor(createNewActor(this.state))
            }
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

export default connect(AddActorPage);

const createNewActor = (state: IAddActorPageState): Actor =>
  new Actor(0, state.name, parseInt(state.initiativeBonus || '0', 10));
