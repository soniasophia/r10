import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = () => {
  return (
  <View style={styles.separator}/>
  );
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
},
});

export default Separator;