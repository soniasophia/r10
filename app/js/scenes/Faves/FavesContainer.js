import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { fetchFavesData } from '../../redux/modules/faves';
import Faves from './Faves';
import realm from '../../config/models';

class FavesContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchFavesData());
    realm.addListener('change', () => this.props.dispatch(fetchFavesData()));
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return (
        <Faves
          faveIds={this.props.faveIds}
          faveData={this.props.faveData}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.session.isLoading,
    faveIds: state.faves.faveIds,
    faveData: state.faves.faveData
  }
}

FavesContainer.propTypes = {
  isLoading: PropTypes.bool,
  faveIds: PropTypes.arrayOf(PropTypes.string),
  faveData: PropTypes.arrayOf(PropTypes.shape({
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
  dispatch: PropTypes.func
}

export default connect(mapStateToProps)(FavesContainer);