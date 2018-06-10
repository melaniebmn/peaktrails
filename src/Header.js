import React, { Component } from 'react';
import styled from 'styled-components';
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

const ButtonToggleMenu = styled.button`
  position: relative;
  display: flex;
  width: 30px;
  height: 2px;
  align-self: center;
  justify-content: flex-end;
  margin: 0 0 0 auto;
  background: var(--text-color);
  transition: background .1s;
  transition-delay: .2s;
  &:before,
  &:after {
    position: absolute;
    width: 145%;
    height: 2px;
    background: var(--text-color);
    content: '';
    transition: all .3s;
  }
  &:before {
    top: -15px;
  }
  &:after {
    top: 15px;
  }
  &.mobile-menu--show {
    background: none;
    transition-delay: 0s;
    &:before,
    &:after {
      top: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

class Header extends Component {
  state = {
    showMobileMenu: false,
  }

  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    if(this.state.showMobileMenu){
      this.setState({'showMobileMenu': false});
    } else{
      this.setState({'showMobileMenu': true});
    }
  }

  render() {
    return (
      <header className={`grid ${ this.props.className }`}>
        <Logo className="grid__col-4">
          <a href="/">
            <img src={logo} alt="logo peaktrais" width="50px" />
            <span>Peaktrails</span>
          </a>
        </Logo>
        <ButtonToggleMenu
          className={this.state.showMobileMenu ? 'mobile-menu--show' : ''}
          onClick={this.toggleMobileMenu}
        />
        <Nav
          header
          className={this.state.showMobileMenu ? 'grid__col-8 mobile-menu--show' : 'grid__col-8'}
        />
      </header>
    );
  }
}

export default styled(Header)`
  position: fixed;
  z-index: 9999;
  padding: 20px 35px;
  background: rgba(255, 255, 255, .9);
  border-bottom: 1px solid var(--border-color);
  Nav {
    @media only screen and (max-width: 767px) {
      position: fixed;
      top: 85px;
      left: 0;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: flex-start;
      background: var(--accent-color);
      color: var(--text-color--light);
      transform: translateX(100%);
      transition: all .3s;
      ul li {
        align-items: center;
        padding: 30px 0;
        border-bottom: 2px solid var(--text-color--light);
        &:not(:last-child) {
          margin: 0;
        }
      }
      &.mobile-menu--show {
        transform: translateX(0);
      }
    }
    @media only screen and (min-width: 768px) {
      ul li a:hover {
        color: var(--accent-color);
        transition: color .3s;
      }
    }
  }
`;