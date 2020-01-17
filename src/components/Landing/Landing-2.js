import React from 'react';
import { CtaContainer } from './Landing-styles';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import mainImage from './img/landing-1.jpg';

const Landing = () => (
  <div className='app'>
    <CtaContainer className='cta-container'>
      <Navigation />
      <div className='landing-image'>
        <img src={mainImage} alt='main' />
        <Header />
      </div>
    </CtaContainer>
    <Main />
    <Footer />
  </div>
);

export default Landing;
