import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled, { css } from 'styled-components';
import SectionHeading from './SectionHeading';

const Trail = styled.div`
  width: 85px;
  padding: 5px 10px;
  background: #fff;
  border-left: 5px solid #31d1ff;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, .35);
`;

const Title = styled.h3`
  font-size: 13px;
  font-weight: 400;
`;

const Description = styled.p`
  display: none;
`;

const Marker = ({ text, description }) => <Trail><Title>{text}</Title><Description>{description}</Description></Trail>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 49.35678167631946,
      lng: -123.12751089296871
    },
    zoom: 11
  };

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
            <Marker
              lat={49.35210439999999}
              lng={-123.24075249999999}
              text={'Cypress Falls'}
              description={'Cypress Falls is the perfect hike to do during the winter months when other trails are buried under snow. It takes you  through a dense forest full of old Cedar and Douglas Fir trees while following Cypress Creek up past two beautiful waterfalls.'}
            />
            <Marker
              lat={49.35418199999999}
              lng={-122.8755999}
              text={'Diez Vistas'}
              description={'Named Diez Vistas for its ten views, this hike offers beautiful scenery overlooking Indian Arm as you make your way around the Buntzen Lake area.'}
            />
            <Marker
              lat={49.3733333}
              lng={-122.97000000000003}
              text={'Dog Mountain'}
              description={'The Dog Mountain Trail is a short, easy hike from Mount Seymour that offers a spectacular view of Vancouver on a clear day.'}
            />
            <Marker
              lat={49.38013960000001}
              lng={-123.081458}
              text={'Grouse Grind'}
              description={'The Grouse Grind is Vancouver\'s most used trail and is renowned for its challenge in requiring physical strength and endurance in order to make it to the top. In less than 3km, the trail climbs more than 850m.'}
            />
            <Marker
              lat={49.3219332}
              lng={-122.91915890000001}
              text={'Jug Island Beach'}
              description={'Jug Island is a tiny gorgeous island located just off the northern tip of Belcarra Regional Park. The island itself is not accessible but you can hike to a beach that faces the island and offers great views of Indian Arm.'}
            />
            <Marker
              lat={49.45925289999999}
              lng={-123.23413900000003}
              text={'Lions Bay Loop'}
              description={'The Lions Bay Loop follows several hiking trails, passing Crystal Falls and viewpoints of Howe Sound.'}
            />
            <Marker
              lat={49.36086}
              lng={-123.03031169999997}
              text={'Lynn Loop'}
              description={'Lynn Loop is a short trail that takes you up through the forest before looping back along the rushing water of Lynn Creek.'}
            />
            <Marker
              lat={49.3736}
              lng={-123.02166520000003}
              text={'Lynn Peak'}
              description={'The trail to Lynn Peak is a challenging hike in Lynn Headwaters Regional Park but the view from the top makes the climb worth the hard work. Lynn Peak is sometimes compared to the Grouse Grind as it offers a great cardio workout but is much less crowded.'}
            />
            <Marker
              lat={49.3766666}
              lng={-123.3908333}
              text={'Mount Gardner'}
              description={'Mount Gardner combines an opportunity to visit the laid-back island community of Bowen Island with a hike that provides views of Howe Sound, the Sunshine Coast, West Vancouver, and Burrard Inlet.'}
            />
            <Marker
              lat={49.43}
              lng={-123.21}
              text={'St Mark\'s Summit'}
              description={'St. Mark\'s Summit is part of the Howe Sound Crest Trail and offers spectacular views of Howe Sound on a clear day.'}
            />
            <Marker
              lat={49.3017049}
              lng={-123.14170030000002}
              text={'Stanley Park'}
              description={'Stanley Park is full of trails for walking and biking and has numerous scenic views from English Bay to the inner harbour.'}
            />
            <Marker
              lat={49.686667}
              lng={-123.13499999999999}
              text={'Stawamus Chief'}
              description={'The Chief towers high above the town of Squamish and is a popular hiking destination that offers scenic views of Howe Sound and several mountains in Garibaldi Provincial Park.'}
            />
            <Marker
              lat={49.3731338}
              lng={-123.2885612}
              text={'Whytecliff Park'}
              description={'Situated in the rugged coastline along the shores of Howe Sound in West Vancouver, the scenic mountains and passing boats offer spectacular views for visitors to Whytecliff Park to enjoy.'}
            />
          </GoogleMapReact>
        </div>
      </section>
    );
  }
}

export default Map;