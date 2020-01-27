import React from 'react';
import { CtaContainer } from './Landing-styles';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import mainImage from './img/landing-comp.jpg';

const Landing = () => (
  <div className='app'>
    <CtaContainer
      data-testid='cta-container'
      className='cta-container'
    >
      <Navigation />
      <div className='landing-image'>
        <img src={mainImage} data-testid='main' alt='main' />
        <Header />
      </div>
    </CtaContainer>
    <Main />
    <Footer />
  </div>
);

export default Landing;
