import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ActivityIndicator
} from 'react-native';

import Speaker from './Speaker';

class SpeakerContainer extends Component {

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <Speaker 
        data={this.props.speakerData}/>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
      isLoading: state.speaker.isLoading,
      speakerData: state.speaker.data
  }
}

// SpeakerContainer.propTypes = {
//   isLoading: PropTypes.bool,
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
//   dispatch: PropTypes.func.isRequired
// }

export default connect(mapStateToProps)(SpeakerContainer);