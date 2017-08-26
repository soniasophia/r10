import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: 20,
    },

    description: {
      margin: 10,
      fontFamily: typography.fontMainLight,
      lineHeight: 25
    },
  
    headerImage: {
      flexDirection: 'row',
      margin: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    fonts: {
      fontWeight: 'bold',
      fontSize: 18,
      alignItems: 'flex-start',
      margin: 10,
      fontFamily: typography.fontMain
    },

    headings: {
      fontWeight: 'bold',
      color: '#9963ea',
      fontFamily: typography.fontMain
    },

    conductWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },

    title: {
      color: colors.purple,
      margin: 5
    }
});