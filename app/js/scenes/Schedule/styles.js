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
    fontFamily: typography.fontMain,
    color: 'black'
  },

  subHeader: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    margin: 5
  },

  time: {
    fontFamily: typography.fontMain,
    color: 'black',
    backgroundColor: colors.lightGrey,
    padding: 10,
    paddingLeft: 15
  },

  // border: {
  //   borderStyle: 'solid',
  //   borderWidth: 0.5,
  //   backgroundColor: colors.lightGrey
  // }
})