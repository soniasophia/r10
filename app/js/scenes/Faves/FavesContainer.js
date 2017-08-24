import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator
} from 'react-native';

import Faves from './Faves';
import { createFave, queryFave, removeFave } from '../../config/models';

class FavesContainer extends Component {


  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }



  render() {
    return (
      <Faves />
    );
  }
}

export default FavesContainer;