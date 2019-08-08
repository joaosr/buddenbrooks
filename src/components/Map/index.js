import React from 'react';
import { Map, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import CountryLayer from '../CountryLayer'
import './Map.css';
import 'leaflet/dist/leaflet.css'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default class MapContainer extends React.Component {
  render() {
    return (
      <Map
        bounds={L.geoJSON(this.props.layers).getBounds()}
        zoomControl={false}
        boxZoom={false}
        doubleClickZoom={false}
        dragging={false}
        keyboard={false}
        scrollWheelZoom={false}
        tap={false}
        touchZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <CountryLayer data={this.props.layers} />
      </Map>
    );
  }
}
