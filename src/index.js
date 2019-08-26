import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MapContainer from './components/Map';
import PlaceCard from './components/PlaceCard';
import * as serviceWorker from './serviceWorker';
import morley from './components/PlaceCard/morley.csv'

ReactDOM.render(<PlaceCard data={morley} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
