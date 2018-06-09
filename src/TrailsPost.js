import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import imgIcons from './assets/img/icons--trail.png';
import trails from './trails.json';

const ImgContainer = styled.figure`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: -15px auto 45px;
  img {
    width: 100%;
  }
  @media only screen and (min-width: 625px) {
    height: 450px;
  }
`;

const ContentContainer = styled.div`
  width: 85%;
  max-width: 855px;
  margin: 0 auto;
`;

const TrailInfo = styled.ul`
  margin: 0 auto 35px;
  li {
    position: relative;
    min-height: 60px;
    justify-content: center;
    margin: 0 0 30px;
    padding: 0 10px 0 75px;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      content: '';
      background: var(--accent-color);
      border-radius: 100%;
    }
    &:after {
      position: absolute;
      top: 7.5px;
      left: 7.5px;
      width: 45px;
      height: 40px;
      content: '';
      background: url(${imgIcons});
    }
    h4,
    p {
      font-size: 20px;
    }
    &:nth-child(1):after {
      background-position: -3px 82px;
    }
    &:nth-child(2):after {
      background-position: -104px 42px;
    }
    &:nth-child(3):after {
      background-position: -107px -1px;
    }
    &:nth-child(4):after {
      background-position: -3px 0;
    }
    &:nth-child(5):after {
      background-position: -51px -8px;
    }
    &:nth-child(6):after {
      background-position: -56px 42px;
    }
    &:nth-child(7):after {
      background-position: -55px 80px;
    }
    &:nth-child(8):after {
      background-position: -6px 42px;
    }
    &:nth-child(9):after {
      background-position: -108px 82px;
    }
  }
`;

const Subheading = styled.h3`
  font-size: 22px;
  text-align: center;
  margin: 75px auto 35px;
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
`;

const TrailText = styled.p`
  font-family: 'Cantarell', sans-serif;
  margin: 0 auto 35px;
`;

const TrailsPost = ({ match: { params: { trailId } } }) => {
  const trail = trails.find(
    _trail => _trail.id === trailId,
  );

  return (
    <section>
      <SectionHeading text={trail.name} />
      <ImgContainer>
        <img src={require(`assets/img/${trail.img}`)} alt="Featured Trail" />
      </ImgContainer>
      <ContentContainer>
        <TrailInfo className="grid">
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Region:</h4>
            <p>{trail.region}</p>
          </li>
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Difficulty:</h4>
            <p>{trail.difficulty}</p>
          </li>
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Time:</h4>
            <p>{trail.time} hrs</p>
          </li>
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Distance:</h4>
            <p>{trail.distance} km</p>
          </li>
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Elevation Gain:</h4>
            <p>{trail.gain}</p>
          </li>
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Season:</h4>
            <p>{trail.season}</p>
          </li>
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Camping:</h4>
            <p>{trail.camping}</p>
          </li>
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Dog Friendly:</h4>
            <p>{trail.dogFriendly}</p>
          </li>
          <li className="grid__col-md-4 grid__col-sm-6 grid__col-12">
            <h4>Public Transit:</h4>
            <p>{trail.transit}</p>
          </li>
        </TrailInfo>

        {trail.description.map((p, i) =>
          <TrailText key={i}>{p}</TrailText>
        )}

        <Subheading>How to get there</Subheading>
        <TrailText>Estimated Driving Time from Vancouver: {trail.drivingTime}</TrailText>
        {trail.drivingInstructions.map((p, i) =>
          <TrailText key={i}>{p}</TrailText>
        )}

        <Subheading>Dogs</Subheading>
        <TrailText>{trail.dogs}</TrailText>

        <Subheading>Toilets</Subheading>
        <TrailText>{trail.toilets}</TrailText>
      </ContentContainer>
    </section>
  );
};

TrailsPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      trailId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default styled(TrailsPost)`
  ul,
  h3,
  p {
    max-width: 855px;
    width: 85%;
  }
  a {
    color: var(--accent-color);
  }
`;
