import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ActivityIndicator
} from 'react-native';

import Schedule from './Schedule';
import { fetchSessionData } from '../../redux/modules/session';
import { fetchFavesData } from '../../redux/modules/faves';
import realm from '../../config/models';

class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSessionData())
    this.props.dispatch(fetchFavesData())
    realm.addListener('change', () => this.props.dispatch(fetchFavesData()));
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <Schedule 
        goToSession={(e)=> {this.goToSession(e)}}
        scheduleData={this.props.scheduleData}
        faveIds={this.props.faveIds}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
      isLoading: state.session.isLoading,
      scheduleData: state.session.data,
      faveIds: state.faves.faveIds
  }
}

ScheduleContainer.propTypes = {
  isLoading: PropTypes.bool,
  scheduleData: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        location: PropTypes.string,
        session_id: PropTypes.string,
        speaker: PropTypes.string,
        start_time: PropTypes.number,
        title: PropTypes.string
    })),
    title: PropTypes.number
})),
  dispatch: PropTypes.func.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string)
}

export default connect(mapStateToProps)(ScheduleContainer);