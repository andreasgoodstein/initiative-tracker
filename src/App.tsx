import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Initiative Tracker</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
