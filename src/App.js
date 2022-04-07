import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
      </main>
    );
  }
}

export default App;
