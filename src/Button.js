import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class Button extends Component {
  render() {
    return (
      <a href={this.props.url} target={this.props.target} className={`${ this.props.className }`}>
        {this.props.text}  
      </a>
    );
  }
}

export default styled(Button)`
  display: block;
  max-width: 300px;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 10px 15px;
  background: var(--accent-color);
  color: var(--text-color--light);
  border: 1px solid var(--accent-color);
  transition: all .5s;
  &:hover {
    cursor: pointer;
    background: transparent;
    color: var(--accent-color);
  }
  ${props => props.secondary && css`
    background: transparent;
    color: var(--accent-color);
    &:hover {
      background: var(--accent-color);
      color: var(--text-color--light);
    }
  `}
  ${props => props.blueWhite && css`
    &:hover {
      background: #fff;
      color: var(--accent-color);
    }
  `}
`;