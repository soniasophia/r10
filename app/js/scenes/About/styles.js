import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: 20,
    },

    header: {
      margin: 10,
      fontFamily: typography.fontMainLight
    },
  
    headerImage: {
      flexDirection: 'row',
      margin: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    fonts: {
      fontWeight: 'bold',
      fontSize: typography.baseSize,
      alignItems: 'flex-start',
      margin: 10,
      fontFamily: typography.fontMain
    },

    headings: {
      fontWeight: 'bold',
      color: '#9963ea',
      fontFamily: typography.fontMain
    },
});