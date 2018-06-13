import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import TrailsPostTile from './TrailsPostTile';
import trails from './trails.json';

const TrailsContainer = styled.div`
  justify-content: space-between;
`;

class Trails extends Component {
  componentDidMount() {
    document.title = "Peaktrails | Trails";
  }

  render() {
    return (
      <section className={`${ this.props.className }`}>
        <SectionHeading text="Hiking Trails" />
        <TrailsContainer className="grid">
          {trails.map((trail, i) => (
            <Link
              to={`/trails/${trail.id}`}
              className="grid__col-lg-4 grid__col-sm-6 grid__col-12"
              key={i}
            >
              <TrailsPostTile
                title={trail.name}
                img={trail.img}
                difficulty={trail.difficulty}
                time={trail.time}
                distance={trail.distance}
                gain={trail.gain}
              />
            </Link>
          ))}
        </TrailsContainer>
      </section>
    );
  }
}

export default styled(Trails)`
  justify-content: space-between;
  padding: 0 40px;
  a {
    color: inherit;
  }
`;
