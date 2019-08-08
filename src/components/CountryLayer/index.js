import React, { Component } from 'react';
import { GeoJSON } from 'react-leaflet';

export default class CountryLayer extends Component {

  getStyleByFeature = (feature) => {
    return {
      color: '#0000ff',
      dashArray: '',
      fillOpacity: 0.15,
      weight: 1
    };
  }

  onFeatureClick = (evt, feature, layer) => {
    console.log(feature.properties.name);
  }

  bindLayerEvents = (feature, layer) => {
    layer.on({
      click: evt => this.onFeatureClick(evt, feature, layer)
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
