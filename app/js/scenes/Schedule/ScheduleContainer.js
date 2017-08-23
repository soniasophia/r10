import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ActivityIndicator
} from 'react-native';

import Schedule from './Schedule';
import { fetchSessionData } from '../../redux/modules/session';

class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSessionData())
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
        <Schedule data={this.props.data}/>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
      isLoading: state.session.isLoading,
      data: state.session.data
  }
}

ScheduleContainer.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(ScheduleContainer);