import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './css/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div className="solarSystem" data-testid="solar-system">
        <div>
          <Title headline="Planetas" />
        </div>
        <section className="PlanetCard">
          {planets.map((e) => (
            <PlanetCard planetName={ e.name } planetImage={ e.image } key={ e.name } />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
