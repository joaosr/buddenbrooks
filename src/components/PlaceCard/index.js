import React from 'react';
import './PlaceCard.css';

export default class PlaceCard extends React.Component {
  render() {
    return (
      <div class="col-xxl-8 col-xl-8 col-lg-12">
          <div class="panel">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xl-3 col-md-3 col-lg-3">
                </div>
                <div class="col-xl-3 col-md-3 col-lg-3">
                </div>
                <div class="col-xl-3 col-md-3 col-lg-3" id="rentrollfilterSelect">
                </div>
                <div class="col-xl-3 col-md-3 col-lg-3">
                  <div id="shareNumberBox" class="pull-right">
                    <div class="counter counter-md text-left">
                        <span id="shareNumber" class="pull-right font-size-20 font-weight-400 title-color"></span>
                    </div>
                    <div class="font-size-12 blue-grey-400 pull-right"><span id="shareNumberText" ></span></div>
                  </div>
                </div>
              </div>
              <div class="margin-bottom-8"></div>
            </div>
            <div class="panel-body">
              <div class="margin-28"></div>
              <div class="row no-space h-full">
                <div class="col-xxl-6 col-xl-6 col-lg-12">
                  <div id="minimap" class="chart-height">
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-12">
                    <div class="chart-height" id="rentrollPlaces"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
