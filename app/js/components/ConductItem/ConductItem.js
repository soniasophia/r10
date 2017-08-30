import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';

import { styles } from './styles';


class ConductItem extends Component {
  constructor() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental
        && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    
    super();

    this.state = {
      display: false,
      spin: new Animated.Value(0)
    }
  }

  expandItem = () => {
    this.spin();
    LayoutAnimation.easeInEaseOut();
    this.setState({ display: !this.state.display })
  }

  spin = () => {
    this.state.spin.setValue(0);

    Animated.timing(
      this.state.spin,
      { toValue: 1, duration: 300 }
    ).start();
  }


  render() {

    let spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });

    let animatedStyle = {
      transform: [
        { rotate: spin }
      ],
    }

    return (
      <View>
        <TouchableOpacity onPress={this.expandItem}>
          <View style={styles.conductWrapper}>
            <Animated.Text style={[animatedStyle, styles.title]}> {this.state.display ? '-' : '+'}</Animated.Text>
            <Text style={styles.title}>{this.props.data.title}</Text>
          </View>
        </TouchableOpacity>
        <View>
          {this.state.display &&
            <Text style={styles.description}>{this.props.data.description}</Text>}
        </View>
      </View>
    );
  }
}

export default ConductItem;