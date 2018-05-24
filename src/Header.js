import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logo from './assets/img/logo.png';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 32px;
  flex-direction: row;
  a {
    display: flex;
    align-items: center;
    color: inherit;
  }
  span {
    margin: 0 0 0 10px;
  }
`;

class Header extends Component {
  render() {
    return (
      <header className={`grid ${ this.props.className }`}>
        <Logo className="grid__col-4">
          <a href="/">
            <img src={logo} alt="logo peaktrais" width="50px" />
            <span>Peaktrails</span>
          </a>
        </Logo>
        <Nav header className="grid__col-8" />
      </header>
    );
  }
}

export default styled(Header)`
  padding: 20px 35px;
  background: rgba(255, 255, 255, .9);
  border-bottom: 1px solid var(--border-color);
`;