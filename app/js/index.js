import React, { Component } from 'react';
import {
  StatusBar
} from 'react-native';

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
  NavigationStyles
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
          <StatusBar barStyle="light-content" />
          <StackNavigation
            id="root"
            navigatorUID="root"
            initialRoute={Router.getRoute('navigation')}
            defaultRouteconfig={{
              styles: { ...NavigationStyles.SlideVertical},
            }}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}