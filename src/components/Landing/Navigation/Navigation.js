import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Landing-styles';
import { NavContainer } from './NavigationStyles';

const Navigation = () => (
  <NavContainer data-testid='landing-nav' className='navigation'>
    <div className='logo'>
      <Link to='/'>
        <Logo />
      </Link>
      <p className='logo-name'>DevCoach</p>
    </div>
    <div className='list-items-container'>
      <ul className='list-items'>
        <li className='list-item'>
          <Link data-testid='faq' to='/faq/general'>
            FAQ
          </Link>
        </li>
        <li className='list-item'>
          <Link data-testid='about' to='/about'>
            About
          </Link>
        </li>
        <li className='list-item'>
          <Link data-testid='login' to='/login'>
            Login
          </Link>
        </li>
        <li className='list-item'>
          <Link data-testid='signup' to='/register'>
            Signup
          </Link>
        </li>
      </ul>
    </div>
  </NavContainer>
);

export default Navigation;
