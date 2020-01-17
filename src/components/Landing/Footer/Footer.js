import React from 'react';
import { StyledButton, buttonTheme } from '../Landing-styles';
import { FooterContainer } from './Footer-styles';

import github from '../../../img/github-1.png';
import facebook from '../../../img/facebook.png';
import linkdin from '../../../img/linkedin.png';
import twitter from '../../../img/twitter-1.png';
import instagram from '../../../img/instagram-logo-1.png';

const Footer = () => (
  <FooterContainer className='footer-container'>
    <div className='footer-top'>
      <div className='cta-message'>
        <h2>What are you waiting for?</h2>
      </div>
      <div className='cta-button'>
        <a href='/register'>
          <StyledButton theme={buttonTheme}>Join Now</StyledButton>
        </a>
      </div>
    </div>
    <div className='footer-bottom'>
      <div className='footer-content footer-copyright'>
        <p>Copyright © 2020 DevCoach</p>
      </div>
      <div className='footer-content footer-icons'>
        <div className='footer-icon'>
          <img src={github} alt='github' />
        </div>
        <div className='footer-icon'>
          <img src={facebook} alt='facebook' />
        </div>
        <div className='footer-icon'>
          <img src={twitter} alt='twitter' />
        </div>
        <div className='footer-icon'>
          <img src={linkdin} alt='linkdin' />
        </div>
        <div className='footer-icon'>
          <img src={instagram} alt='instagram' />
        </div>
      </div>
      <div className='footer-content footer-tribute'>
        <p>Designed by Labs EU3</p>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
