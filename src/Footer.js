import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Nav from './Nav';

const Copyright = styled.p`
  width: 85%;
  margin: 35px auto 0;
`;

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className}>
        <Nav />
        <Copyright>&copy; 2018 Peaktrails</Copyright>
      </footer>
    );
  }
}

export default styled(Footer)`
  text-align: center;
  padding: 50px 0;
  background: var(--accent-color);
  color: var(--text-color--light);
  Nav ul {
    margin: 0 auto;
  }
`;