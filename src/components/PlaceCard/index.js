import React, { Component } from 'react';
import { RowChart } from "./rowChart";
import { DataContext } from "./cxContext";
import './PlaceCard.css';

class PlaceCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return (
      <div className="chart">
        <p>{`${this.props.usageType}`}</p>
        <DataContext data={this.props.data}>
          <RowChart />
        </DataContext>
      </div>
    );
  }
}

export default PlaceCard
