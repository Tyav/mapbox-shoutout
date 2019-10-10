import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class MapBox extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 6.554877280785348,
      longitude: 3.3436160623513445,
      zoom: 12,
    },
  };

  render() {
    return (
      <>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
          mapStyle="mapbox://styles/oketegah/ck1km87ze03op1cnzaacwmo4b"
        />
      </>
    );
  }
}

export default MapBox;
