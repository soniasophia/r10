import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

const FaveHeart = () => {
  return (
    <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={'black'}/>
  );
}

export default FaveHeart;