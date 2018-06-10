import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const ImgContainer = styled.figure`
  overflow: hidden;
  align-items: center;
  img {
    min-width: 100%;
    min-height: 100%;
  }
  @media only screen and (min-width: 500px) {
    height: 400px;
  }
  @media only screen and (min-width: 1200px) {
    height: 450px;
  }
`;

const TrailTitle = styled.h2`
  font-size: 50px;
  margin: 0 0 4%;
  @media only screen and (max-width: 1022px) {
    font-size: 30px;
  }
`;

const TrailInfo = styled.ul`
  max-width: 295px;
  margin: 5% auto 7%;
  justify-content: space-between;
  li {
    width: 80px;
    height: 80px;
    text-align: center;
    justify-content: center;
    background: var(--trail-info--bg);
    color: var(--text-color--light);
    border-radius: 100%;
  }
`;

class HomeTrailTile extends Component {
  render() {
    return (
      <article className={`grid ${ this.props.className }`}>
        <ImgContainer className="grid__col-md-6 grid__col-12 trail__img">
          <img src={require(`assets/img/${this.props.img}`)} alt="Trail Preview"/>
        </ImgContainer>
        <div className="grid__col-md-6 grid__col-12 trail__description">
          <TrailTitle>{this.props.title}</TrailTitle>
          <TrailInfo className="grid">
            <li className="grid__col-3">{this.props.difficulty}</li>
            <li className="grid__col-3">{this.props.time} hrs</li>
            <li className="grid__col-3">{this.props.distance} km</li>
          </TrailInfo>
          <Button url={`/trails/${this.props.url}`} text="Read more" />
        </div>
      </article>
    );
  }
}

export default styled(HomeTrailTile)`
  text-align: center;
  align-items: center;
  .trail__description {
    align-items: center;
    padding: 45px 50px;
  }
  @media only screen and (min-width: 992px) {
    &:nth-child(2n) {
      .trail__img {
        order: 2;
      }
      .trail__description {
        order: 1;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    align-items: flex-start;
  }
`;