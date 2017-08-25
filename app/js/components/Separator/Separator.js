import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = () => {
  return (
  <View style={styles.separator}/>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1.5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#e6e6e6'
},
});

export default Separator;