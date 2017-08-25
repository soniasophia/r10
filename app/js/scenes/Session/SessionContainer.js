import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ActivityIndicator
} from 'react-native';

import Session from './Session';
import { fetchSpeakerData } from '../../redux/modules/speaker';

class SessionContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSpeakerData(this.props.sessionData.speaker))
  }

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <Session
          sessionData={this.props.sessionData}
          speakerData={this.props.speakerData}
          faveIds={this.props.faveIds}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.session.isLoading,
    speakerData: state.speaker.data,
    faveIds: state.faves.faveIds
  }
}

SessionContainer.propTypes = {
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  speakerData: PropTypes.objectOf(PropTypes.string),
  faveIds: PropTypes.arrayOf(PropTypes.string),
  sessionData: PropTypes.shape({
    item: PropTypes.shape({
      description: PropTypes.string,
      location: PropTypes.string,
      session_id: PropTypes.string,
      speaker: PropTypes.string,
      start_time: PropTypes.number,
      title: PropTypes.string
    })
  })
};

export default connect(mapStateToProps)(SessionContainer);