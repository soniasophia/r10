import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchConductData} from '../../redux/modules/conduct';
import {
  ActivityIndicator
} from 'react-native';

import About from './About';

class AboutContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchConductData())
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <About data={this.props.data} />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
      isLoading: state.conduct.isLoading,
      data: state.conduct.data
  }
}

AboutContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(AboutContainer);