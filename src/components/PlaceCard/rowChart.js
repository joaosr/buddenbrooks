import React from "react";
import * as dc from "dc";
import "dc/dc.css";
import { scaleLinear, scaleOrdinal } from "d3";
import { ChartTemplate } from "./chartTemplate";

const rowChartFunc = (divRef, ndx) => {

  const dimension = ndx.dimension(function(d) {return d.city_id;});
  const group = dimension.group().reduceSum(function(d) {return +d.rent;});

  const chart = dc.rowChart(divRef); // Divref is a refere3nce to the div we're attaching to

  chart
    .width(600)
    .height(400)
    .x(scaleLinear().domain([6,20]))
    .elasticX(true)
    .label((d) => {
        var name = '';
        dimension.groupAll().reduceSum((_d) => {
          name = (_d.city_id === d.key ? _d.city : name);
          return 0;
        }).value();

        return name;
    })
    .colors(scaleOrdinal().range(["#6ab8c2"]))
    .dimension(dimension)
    .group(group)

    return chart;
};

export const RowChart = props => (
    <ChartTemplate chartFunction={rowChartFunc} title="Yearly Fluctuation"/>
)
