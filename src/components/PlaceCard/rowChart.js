import React from "react";
import * as dc from "dc";
import "dc/dc.css";
import { scaleLinear } from "d3";
import { ChartTemplate } from "./chartTemplate";

const rowChartFunc = (divRef, ndx) => {

  const runDimension = ndx.dimension(function(d) {return +d.Run;});
  const speedSumGroup = runDimension.group().reduceSum(function(d) {return d.Speed * d.Run / 1000;});

  const chart = dc.rowChart(divRef); // Divref is a refere3nce to the div we're attaching to

  chart
    .width(600)
    .height(400)
    .x(scaleLinear().domain([6,20]))
    .elasticX(true)
    .dimension(runDimension)
    .group(speedSumGroup)

    return chart
};

export const RowChart = props => (
    <ChartTemplate chartFunction={rowChartFunc} title="Yearly Fluctuation"/>
)
