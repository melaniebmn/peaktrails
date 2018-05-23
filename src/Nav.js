import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Menu = styled.ul`
  max-width: 450px;
`;

const MenuItem = styled.li`
  font-size: 20px;
  a {
    color: inherit;
  }
  @media only screen and (max-width: 767px) {
    &:not(:last-child) {
      margin: 0 0 20px;
    }
  }
`;

class Nav extends Component {
  render() {
    return (
      <nav className={`${ this.props.className }`}>
        <Menu className="grid">
          <MenuItem className="grid__col-sm-auto grid__col-12">
            <a href="/trails">Trails</a>
          </MenuItem>
          <MenuItem className="grid__col-sm-auto grid__col-12">
            <a href="/map">Map</a>
          </MenuItem>
          <MenuItem className="grid__col-sm-auto grid__col-12">
            <a href="/blog">Blog</a>
          </MenuItem>
        </Menu>
      </nav>
    );
  }
}

export default Nav;