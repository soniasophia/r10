import React, { Component } from 'react';
import Router from './routes';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography, linearGradient, selectedItemStyle } from '../config/styles';
import LinearGradient from 'react-native-linear-gradient';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      fontFamily: typography.fontMain,
    },
    renderBackground: () => {
      return (
        <LinearGradient
          style={linearGradient}
          colors={['#9963ea', '#cf392a']}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.0, y: 1.0 }}
        />
      );
    }
  }
}


class NavigationLayout extends Component {

  static route = {
    navigationBar: {
      visible: false,
    }
  };

  render() {
    return (
      <DrawerNavigation
        id='main'
        navigatorUID='main'
        initialItem='schedule'
        drawerWidth={150}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id='schedule'
          selectedStyle={selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon('md-calendar', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Schedule', isSelected)}
        >

          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='faves'
          selectedStyle={selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon('md-heart', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Faves', isSelected)}
        >

          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='about'
          selectedStyle={selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon('md-information-circle', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('About', isSelected)}
        >

          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }


  renderIcon(iconName, isSelected) {
    const color = isSelected ? colors.purple : colors.mediumGrey;

    return (
      <Icon
        name={iconName}
        size={24}
        color={color}
      />
    );
  }

  renderTitle(title, isSelected) {
    const color = isSelected ? colors.purple : colors.mediumGrey;

    const titles = {
      color: color,
      fontFamily: typography.fontMain,
      fontSize: 15,
      marginLeft: 10
    }
    return (
      <Text style={titles}>{title}</Text>
    );
  }

}

export default NavigationLayout;