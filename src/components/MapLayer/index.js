import React, { Component } from 'react';
import { GeoJSON } from 'react-leaflet';

export default class MapLayer extends Component {

  getStyleByFeature = (feature) => {
    return {
      color: '#0000ff',
      dashArray: '',
      fillOpacity: 0.15,
      weight: 1
    };
  }

  bindLayerEvents = (feature, layer) => {
    layer.on({
      click: this.props.onFeatureClick
    });
  }

  render() {
    return <GeoJSON
      data={this.props.data}
      style={this.getStyleByFeature}
      onEachFeature={this.bindLayerEvents}
    />
  }
}
