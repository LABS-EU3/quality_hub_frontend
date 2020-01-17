import React from 'react';
import { Logo } from '../Landing-styles';
import { NavContainer } from './NavigationStyles';

const Navigation = () => (
  <NavContainer className='navigation'>
    <div className='logo'>
      <Logo />
      <p className='logo-name'>DevCoach</p>
    </div>
    <div className='list-items-container'>
      <ul className='list-items'>
        <li className='list-item'>
          <a href='/faq/general'>FAQ</a>
        </li>
        <li className='list-item'>
          <a href='/about'>About</a>
        </li>
        <li className='list-item'>
          <a href='/login'>Login</a>
        </li>
        <li className='list-item'>
          <a href='/register'>Signup</a>
        </li>
      </ul>
    </div>
  </NavContainer>
);

export default Navigation;
