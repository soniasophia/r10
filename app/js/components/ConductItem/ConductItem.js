import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  FlatList
} from 'react-native';

import { styles } from './styles';


class ConductItem extends Component {
  constructor() {
    super();

    this.state = {
      display: false,
      rotate: new Animated.Value(0)
    }
  }

  onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({display: !this.state.display})
  }
  

  render() {
    return (
        <View>
          <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.headings}> {this.state.display ? '-' : '+'} {this.props.data.title}</Text>
          </TouchableOpacity>
          {this.state.display &&
          <Text style={styles.header}>{this.props.data.description}</Text>}
        </View>
    );
  }
}

export default ConductItem;