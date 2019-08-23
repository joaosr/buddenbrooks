import React from 'react';
import { csv } from 'd3'
import * as crossfilter from "crossfilter2";

export const CXContext = React.createContext("CXContext");

export class DataContext extends React.Component {
  constructor(props) {
    super(props);
    this.state={loading:false,hasNDX:false};
  }

  componentDidMount(){
    if (this.state.hasNDX){
      return
    }
    if(this.state.loading){
      return
    }
    this.setState({loading:true})


    this.props.data.forEach(function(x) {
      x.Speed = +x.Speed;
    });
    this.ndx = crossfilter(this.props.data);
    this.setState({loading:false,hasNDX:true});
  }

  render() {
    if(!this.state.hasNDX){
          return null;
      }
    return (
      <CXContext.Provider value={{ndx:this.ndx}}>
        <div ref={this.parent}>
        {this.props.children} {/*Render The charts*/}
        </div>
      </CXContext.Provider>
    );
  }
}
