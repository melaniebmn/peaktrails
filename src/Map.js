import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import trails from './trails.json';

const Trail = styled.div`
  overflow: hidden;
  position: relative;
  width: 85px;
  background: #fff;
  border-left: 5px solid #31d1ff;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, .35);
  transition: .3s;
  a {
    display: inline-block;
    padding: 5px 10px;
    color: inherit;
  }
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    transform: translateX(-100%);
    transition: .3s;
  }
  &:hover {
    z-index: 1;
    color: var(--text-color--light);
    &:before {
      background: var(--accent-color);
      transform: translateX(0%);
    }
  }
`;

const Title = styled.h3`
  position: relative;
  font-size: 13px;
  font-weight: 400;
`;

const Marker = ({ url, text }) => <Trail><a href={`/trails/${url}`}><Title>{text}</Title></a></Trail>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 49.35678167631946,
      lng: -123.12751089296871
    },
    zoom: 11
  };

  componentDidMount() {
    document.title = "Peaktrails | Map";
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <section>
        <SectionHeading text="Hiking Trails" />
        <div style={{height: '75vh'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBUcb8MjkvddgWrkuzu-eShqSdq_q7rl3s' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {trails.map((trail, i) => (
              <Marker
                key={i}
                url={trail.id}
                text={trail.name}
                lat={trail.latitude}
                lng={trail.longitude}
              />
            ))}
          </GoogleMapReact>
        </div>
      </section>
    );
  }
}

export default Map;