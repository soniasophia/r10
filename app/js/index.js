import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import About from '../js/scenes/About/';

export default class r10 extends Component {



  render() {
    return (
      <View>
        <About />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});