import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  header: {
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'flex-start',
    margin: 5,
    marginLeft: 15,
    fontFamily: typography.fontMain,
    color: 'black'
  },

  subHeader: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    margin: 5,
    marginLeft: 15
  },

  time: {
    fontFamily: typography.fontMain,
    color: 'red',
    padding: 10,
    paddingLeft: 15
  },

  fonts: {
    fontFamily: typography.fontMainLight,
    color:'black',
    marginLeft: 15,
    marginBottom: 20,
    fontSize: typography.baseSize
  }
})