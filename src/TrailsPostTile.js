import React, { Component } from 'react';
import styled from 'styled-components';

const TrailTitle = styled.h2`
  font-size: 28px;
  text-align: center;
  padding: 10px 5px;
  background: var(--accent-color);
  color: var(--text-color--light);
`;

const ImgContainer = styled.figure`
  overflow: hidden;
  display: flex;
  align-items: center;
  img {
    min-width: 100%;
    min-height: 100%;
  }
  @media only screen and (min-width: 625px) {
    height: 204px;
  }
`;

const TrailInfo = styled.ul`
  font-size: 18px;
  margin: 0 25px 15px;
  li {
    font-size: 20px;
    padding: 15px 0;
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
    }
  }
`;

const SelectTrail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--accent-color);
  color: var(--text-color--light);
  transform: translateY(-100%);
  transition: transform .3s;
  h3 {
    font-size: 33px;
    letter-spacing: 2px;
  }
`;

class TrailsPostTile extends Component {
  render() {
    return (
      <article className={`${ this.props.className }`}>
        <TrailTitle>{this.props.title}</TrailTitle>
        <ImgContainer>
          <img src={require(`assets/img/${this.props.img}`)} alt="Trail Preview" />
        </ImgContainer>
        <TrailInfo>
          <li>Difficulty: {this.props.difficulty}</li>
          <li>Time: {this.props.time} hrs</li>
          <li>Distance: {this.props.distance} km</li>
          <li>Gain: {this.props.gain}</li>
        </TrailInfo>
        <SelectTrail>
          <h3>View Trail</h3>
        </SelectTrail>
      </article>
    );
  }
}

export default styled(TrailsPostTile)`
  overflow: hidden;
  position: relative;
  margin: 0 auto 45px;
  padding: 0 0 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, .15);
  &:hover {
    div {
      transform: translateY(0%);
    }
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
  }
`;