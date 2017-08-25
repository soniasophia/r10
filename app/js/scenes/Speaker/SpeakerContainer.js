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
        speakerData={this.props.speakerData}/>
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

SpeakerContainer.propTypes = {
  isLoading: PropTypes.bool,
  speakerData: PropTypes.objectOf(PropTypes.string),
  dispatch: PropTypes.func
}

export default connect(mapStateToProps)(SpeakerContainer);