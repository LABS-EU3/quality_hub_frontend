import React from 'react';
import { StyledButton, buttonTheme } from '../Landing-styles';
import { HeaderContainer } from './Header-styles';

const Header = () => (
  <HeaderContainer>
    <h2 className='cta-title'>
      Interviewing isn't easy. That doesn't mean it has to be
      stressful
    </h2>
    <div className='cta-button'>
      <a href='/register'>
        <StyledButton theme={buttonTheme}>SIGN UP</StyledButton>
      </a>
    </div>
  </HeaderContainer>
);

export default Header;
