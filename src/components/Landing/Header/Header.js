import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton, buttonTheme } from '../Landing-styles';
import { HeaderContainer } from './Header-styles';

const Header = () => (
  <HeaderContainer>
    <h2 data-testid='cta-title' className='cta-title'>
      Interviewing isn't easy. That doesn't mean it has to be
      stressful
    </h2>
    <div className='cta-button'>
      <Link data-testid='cta-button' to='/register'>
        <StyledButton theme={buttonTheme}>SIGN UP</StyledButton>
      </Link>
    </div>
  </HeaderContainer>
);

export default Header;
