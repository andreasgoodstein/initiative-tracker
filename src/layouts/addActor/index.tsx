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
  name: string;
}

export class AddActorPage extends React.PureComponent<
  AddActorProps,
  IAddActorPageState
> {
  constructor(props: AddActorProps) {
    super(props);

    this.state = {
      name: '',
    };
  }

  public render(): React.ReactNode {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Add Actor</Text>

          <TouchableHighlight
            style={styles.button}
            onPress={() =>
              this.props.handleAddActor(createNewActor(this.state))
            }
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>

          <Text>Name</Text>
          <View style={styles.inputFieldName}>
            <TextInput
              autoFocus={true}
              style={styles.input}
              onChangeText={(name) => this.setState({ name })}
              onEndEditing={() => this.props.handleAddActor(createNewActor(this.state))}
              value={this.state.name}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default connect(AddActorPage);

const createNewActor = (state: IAddActorPageState): Actor =>
  new Actor(0, state.name);
