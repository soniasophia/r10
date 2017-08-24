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
        console.log(this.props.speakerData)
        return (
          <Session 
          data={this.props.sessionData}
          speaker={this.props.speakerData}
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
    dispatch: PropTypes.func.isRequired,
    speakerData: PropTypes.object
  }
  
  export default connect(mapStateToProps)(SessionContainer);