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
    marginLeft: 15,
    fontFamily: typography.fontMain,
    color: 'black'
  },

  subHeader: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    marginLeft: 15,
    marginTop: 10,
    fontSize: 15
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
    marginRight: 15,
    marginBottom: 20,
    fontSize: typography.baseSize
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
    margin: 10
  },

  speaker: {
    flex: 1,
    flexDirection: 'row'
  },

  speakerFont: {
    fontFamily: typography.fontMain,
    color: 'black',
    paddingLeft: 15,
    fontSize: 15
  },

  heart: {
    position: 'absolute',
    top: 10,
    right: 20
  }
})