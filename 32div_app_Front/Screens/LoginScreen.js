import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

export default class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is an Intro Page!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});