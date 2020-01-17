import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../../img/firelogo.png';

// styled-components
const mobileHidden = css`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const NavbarContainer = styled.div`
  height: 4em;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 11;
  box-shadow: 0px 3px 4px -2px rgba(150, 150, 150, 1);

  @media only screen and (max-width: 600px) {
    justify-content: space-evenly;
  }
`;

const Logo = styled.div`
  width: 4.5em;
  height: 5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
  transform: scale(0.7);
  ${mobileHidden};
`;

const LogoTitleContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavTitleContainer = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: normal;
  color: grey;
  font-size: 18px;

  .navLink {
    text-decoration: none;
    color: grey;
  }
`;

const LinksContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 0.2em;
`;

const NavbarLink = styled.div`
  font-family: Ubuntu;
  font-size: 14px;
  color: black;
  ${mobileHidden};

  a {
    text-decoration: none;
    color: black;
  }
`;

export const buttonTheme = {
  text: 'white',
  background: '#408f53',
};

export const invertTheme = {
  text: '#4fad65',
  background: 'white',
};

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoTitleContainer>
        <NavLink to='/'>
          <Logo />
        </NavLink>
        <NavTitleContainer>
          <NavLink className='navLink' to='/'>
            <h1>DevCoach</h1>
          </NavLink>
        </NavTitleContainer>
      </LogoTitleContainer>
      <LinksContainer>
        <NavbarLink>
          <a href='/dashboard'>DashBoard</a>
        </NavbarLink>
        <NavbarLink>
          <a href='/faq/general'>FAQ</a>
        </NavbarLink>
        <NavbarLink>
          <a href='/about'>About</a>
        </NavbarLink>
        <NavbarLink>
          <a href='/login'>Login</a>
        </NavbarLink>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
