import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './css/Missions.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <div>
          <Title headline="Missões" />
        </div>
        <section className="Missions">
          {missions.map((e) => (
            <MissionCard
              name={ e.name }
              year={ e.year }
              country={ e.country }
              destination={ e.destination }
              key={ e.name }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
