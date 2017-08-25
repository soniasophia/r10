import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { createFave, removeFave } from '../../config/models';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { colors } from '../../config/styles';

const FaveButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
        colors={[colors.purple, colors.blue]}
        style={styles.button}
      >
      <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

FaveButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default FaveButton;
