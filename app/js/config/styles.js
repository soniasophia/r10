import { Platform } from 'react-native';
/** Global Styles
 */

export const colors = {
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
};
//Will have to conditionally set Monstserrat for IOS or Android.
//ios = Montserrat, Android = Montserrat-regular
export const typography = {
  baseSize: 16,
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat'
    },
    android: {
      fontMain: 'Montserrat-regular'
    }
  }),
  fontMainLight: 'Montserrat-Light'
};

export const linearGradient = {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  alignSelf: 'stretch',
  height: '100%'
};

export const selectedItemStyle = {
  backgroundColor: '#e6e6e6'
};

export const titleText = {
  fontWeight: 'bold',
  color: '#999999',
  paddingLeft: 10
}

export const selectedTitleText = {
  color: '#9963ea'
}