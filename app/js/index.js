import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import About from '../js/scenes/About/';

import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Router from './navigation/routes';


export default class r10 extends Component {

  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation 
        id="root"
        navigatorUID="root"
        initialRoute={Router.getRoute('about')} 
        />
      </NavigationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 20
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