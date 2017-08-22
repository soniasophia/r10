import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import About from '../js/scenes/About/';

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Store from './redux/store';
import Router from './navigation/routes';
import { Provider } from 'react-redux'

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
  });


export default class r10 extends Component {

  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation
            id="root"
            navigatorUID="root"
            initialRoute={Router.getRoute('about')}
          />
        </NavigationProvider>
      </Provider>
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