import React, { Component } from 'react';
import { RowChart } from "./rowChart";
import { DataContext } from "./cxContext";
import './PlaceCard.css';

class PlaceCard extends Component {
  render() {
    return (
      <div className="chart">
        <DataContext data={this.props.data}>
          <RowChart />
        </DataContext>
      </div>
    );
  }
}

export default PlaceCard
