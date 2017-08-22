import { StyleSheet } from 'react-native';
import { typography } from '../../config/styles';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: 20,
    },

    header: {
      margin: 10
    },
  
    headerImage: {
      // justifyContent: 'center'
      flexDirection: 'row',
      margin: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    fonts: {
      fontWeight: 'bold',
      fontSize: 18,
      alignItems: 'flex-start',
      margin: 10
      
    },

    headings: {
      fontWeight: 'bold',
      color: '#9963ea'
    }
});