import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="stars">
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
