import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="Missions">
          {missions.map((e) => (
            <MissionCard
              name={e.name}
              year={e.year}
              country={e.country}
              destination={e.destination}
              key={e.name}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
