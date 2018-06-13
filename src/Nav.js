import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/trails" activeClassName="active">Trails</NavLink>
          </MenuItem>
          <MenuItem className="grid__col-sm-auto grid__col-12">
            <NavLink to="/map" activeClassName="active">Map</NavLink>
          </MenuItem>
          <MenuItem className="grid__col-sm-auto grid__col-12">
            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
          </MenuItem>
        </Menu>
      </nav>
    );
  }
}

export default styled(Nav)`
  ${props => props.header && css`
    align-items: flex-end;
    justify-content: center;
    ul li {
      font-size: 30px;
      align-items: flex-end;
      @media only screen and (min-width: 768px) {
        .active {
          color: var(--accent-color);
        }
      }
    }
  `}
`;
