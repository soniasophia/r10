import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'flex-start',
    margin: 5,
    marginLeft: 20,
    marginRight: 15,
    marginTop: 15,
    fontFamily: typography.fontMain,
    color: 'black'
  },

  subHeader: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    marginLeft: 20,
    marginTop: 20,
    fontSize: 15
  },

  time: {
    fontFamily: typography.fontMain,
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20
  },

  fonts: {
    fontFamily: typography.fontMainLight,
    color:'black',
    marginLeft: 20,
    marginRight: 15,
    marginBottom: 20,
    fontSize: typography.baseSize,
    lineHeight: 25
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
    margin: 10
  },

  speaker: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  speakerFont: {
    fontFamily: typography.fontMain,
    color: 'black',
    paddingLeft: 5,
    fontSize: 15
  },

  heart: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: colors.red
  },

  headerWrapper: {
    flexDirection: 'row'
  }
})