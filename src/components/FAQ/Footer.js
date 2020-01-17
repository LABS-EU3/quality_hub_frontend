import React from 'react';
import styled from 'styled-components';

import facebookIcon from '../../img/fb.png';
import githubIcon from '../../img/github-1.png';
import instagramIcon from '../../img/instagram-logo-1.png';
import linkedInIcon from '../../img/linkedIn.png';
import twitterIcon from '../../img/twitter-1.png';
import logo from '../../img/firelogo.png';

// styled-components

// Footer

const NavTitleContainer = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: normal;
  color: grey;
  font-size: 18px;
`;

const FooterConatiner = styled.div`
  height: 50vh;
  width: 100%;
  background: #292d38;
  p {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
  }
`;

const FooterTopSection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LogoFooter = styled.div`
  margin-top: 1.5%;
  margin-left: 10%;
  height: 10em;
  width: 5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;

const LogoTitleContainerFooter = styled.div`
  margin-top: 5%;
  width: 30%;
  display: flex;
  justify-content: flex-start;
`;

const FooterTextStyle = styled.div`
  margin-top: 2%;
  h3 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  p {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;

const FooterBottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  margin-right: 1.5%;
  height: 1.6em;
  img {
    max-height: 100%;
  }
`;

export const Footer = () => {
  return (
    <FooterConatiner>
      <FooterTopSection>
        <LogoTitleContainerFooter>
          <LogoFooter />
          <NavTitleContainer>
            <h1>DevCoach</h1>
          </NavTitleContainer>
        </LogoTitleContainerFooter>
        <FooterTextStyle>
          <h3>SUPPORT</h3>
          <p>How it works</p>
        </FooterTextStyle>
        <FooterTextStyle>
          <h3>PRODUCT</h3>
          <p>Product feedback</p>
          <p>About the team</p>
        </FooterTextStyle>
        <FooterTextStyle>
          <h3>HELP</h3>
          <p>FAQ</p>
          <p>Contact us</p>
          <p>Career</p>
        </FooterTextStyle>
        <FooterTextStyle>
          <h3>LEGAL</h3>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Manage Cookies</p>
        </FooterTextStyle>
      </FooterTopSection>
      <FooterBottomSection>
        <Icons>
          <img src={githubIcon} alt='social link' />
        </Icons>
        <Icons>
          <img src={facebookIcon} alt='social link' />
        </Icons>
        <Icons>
          <img src={instagramIcon} alt='social link' />
        </Icons>
        <Icons>
          <img src={linkedInIcon} alt='social link' />
        </Icons>
        <Icons>
          <img src={twitterIcon} alt='social link' />
        </Icons>
      </FooterBottomSection>
      <p>
        {' '}
        hello@dev-coach.com - copyright © Devcoach 2019. All rights
        reserved.
      </p>
    </FooterConatiner>
  );
};

export default Footer;
