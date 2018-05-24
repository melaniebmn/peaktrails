import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

const TrailTitle = styled.h2`
  font-size: 50px;
  margin: 0 0 4%;
  @media only screen and (max-width: 991px) {
    font-size: 30px;
  }
`;

const TrailBlurb = styled.p`
  font-size: 22px;
  letter-spacing: 1px;
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
        <img
          className="grid__col-md-6 grid__col-12 trail__img"
          src={this.props.img}
        />
        <div className="grid__col-md-6 grid__col-12 trail__description">
          <TrailTitle>{this.props.title}</TrailTitle>
          <TrailBlurb>{this.props.blurb}</TrailBlurb>
          <TrailInfo className="grid">
            <li className="grid__col-3">{this.props.difficulty}</li>
            <li className="grid__col-3">{this.props.duration} hrs</li>
            <li className="grid__col-3">{this.props.length} km</li>
          </TrailInfo>
          <Button text="Read more" />
        </div>
      </article>
    );
  }
}

export default styled(HomeTrailTile)`
  text-align: center;
  .trail__description {
    align-items: center;
    padding: 45px 50px;
  }
  @media only screen and (max-width: 991px) {
    align-items: flex-start;
  }
  ${props => props.imgRight && css`
    @media only screen and (min-width: 992px) {
      .trail__img {
        order: 2;
      }
      .trail__description {
        order: 1;
      }
    }
  `}
`;