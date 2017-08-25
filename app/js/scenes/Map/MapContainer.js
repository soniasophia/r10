import React, { Component } from 'react';
import { MapView } from 'react-native';


class MapContainer extends Component {
  render() {
    return (
      <MapView
        style={{height: 200, margin: 40}}
        showsUserLocation={true}
      />
    );
  }
}

export default MapContainer;