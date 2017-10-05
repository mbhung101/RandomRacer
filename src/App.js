import React, { Component } from 'react';
import RaceContainer from './containers/raceContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <RaceContainer/>
      </div>
    );
  }
}

export default App;
