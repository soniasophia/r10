import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40
  },
  aboutSpeaker: {
    fontSize: 16,
    marginLeft: 60,
    marginBottom: 5,
    fontFamily: typography.fontMain,
    color: colors.white
  },
  backbutton: {
    marginLeft: 15
  },
  speakerImg: {
    width: 100, 
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  speakerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    padding: 20
  },
  name: {
    fontFamily: typography.fontMain,
    fontSize: 30,
    marginBottom: 20
  },
  bio: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.baseSize,
    lineHeight: 30
  }
})