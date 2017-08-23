import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ActivityIndicator
} from 'react-native';

import Session from './Session';
// import { fetchSessionData } from '../../redux/modules/session';
import { fetchSpeakerData } from '../../redux/modules/speaker';

class SessionContainer extends Component {
  
    componentDidMount() {
      this.props.dispatch(fetchSpeakerData())
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
          speakerData={this.props.speakerData}
          data={this.props.sessionData}
          />
        );
      }
    }
  }
  
  function mapStateToProps(state) {
    return {
        isLoading: state.session.isLoading,
        speakerData: state.speaker.data
    }
  }
  
  SessionContainer.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
    speakerData: PropTypes.object
  }
  
  export default connect(mapStateToProps)(SessionContainer);