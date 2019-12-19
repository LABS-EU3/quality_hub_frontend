import styled, { css } from 'styled-components';
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import logo from '../img/firelogo.png';
const vector2 = require('../img/landingvector.png');
const greenBackgroundSVG = require('../img/green-slanted-bg-shape.png');
const handshakeImg = require('../img/handshake.png');
const analytics = require('../img/analytics-1.png');
const startup = require('../img/startup-1.png');
const getStartedVector = require('../img/getstartedvector.png');
const facebookIcon = require('../img/fb.png');
const githubIcon = require('../img/github-1.png');
const instagramIcon = require('../img/instagram-logo-1.png');
const linkedInIcon = require('../img/linkedin.png');
const twitterIcon = require('../img/twitter-1.png');


// media queries

const mobileHidden = css`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

// styled components

const LandingWrapper = styled.div`
  width: 100%;
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
  color: #459a59;
  font-size: 18px;
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
  background: '#408f53'
};

export const invertTheme = {
  text: '#4fad65',
  background: 'white'
};

export const StyledButton = styled.button`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 100%;
  width: 100%;
  padding: 1em 2em;
  border: none;
  font-family: Ubuntu;
  font-size: 14px;
  transition: opacity 0.2s;
  transition: transform 0.1s;

  :hover {
    opacity: 0.8;
  }

  :focus {
    outline: none;
  }

  :active {
    outline: none;
    transform: translateY(1px);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  @media only screen and (max-width: 600px) {
    padding: 0.7em;
  }
`;

const TopLandingContainer = styled.div`
  width: 100%;
  padding-top: 1em;
  height: 60vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 120vh;
  }
`;

const LandingTaglineContainer = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 80%;
    font-size: 2.5em;
    padding-top: 0.75em;

    @media only screen and (max-width: 600px) {
      padding-top: 0;
    }
  }

  h3 {
    margin-top: 0em;
    width: 80%;
    font-size: 1.5em;
    font-weight: normal;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;

    h1 {
      width: 100%;
    }
  }
`;

const SignupContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;

  input {
    height: 2em;
    width: 70%;
    font-family: Ubuntu, sans-serif;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    padding: 0.5em;
    font-size: 16px;

    :hover {
      background: #edf2f7;
    }

    :focus {
      outline: none;
    }

    ::placeholder {
      color: darkgray;
    }
  }

  button {
    margin-left: 1em;
    width: 10em;
    height: 3.5em;
  }
`;

const LandingRightContainer = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: center;
`;

const LandingVectorImageContainer = styled.div`
  z-index: 1;

  img {
    padding-right: 3em;
    padding-top: 2em;
    height: 100%;
    transform: scale(1.05);
  }

  ${mobileHidden};
`;

const InfoboxContainer = styled.div`
  height: 120vh;
  background-image: url(${greenBackgroundSVG});
  background-repeat: no-repeat;
  background-size: 100vw 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 600px) {
    height: 360vh;
    background-size: auto;
    background-repeat: ;
  }
`;

const InfoBoxTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    padding-bottom: 1em;

    @media only screen and (max-width: 600px) {
      width: 80%;
      text-align: center;
    }
  }
`;

const InfoCardsContainer = styled.div`
  display: flex;
  margin-top: -10em;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    margin-top: -15em;
  }
`;

const BottomLandingContainer = styled.div`
  height: 100vh;
`;

const InfoCard = styled.div`
  height: 20em;
  width: 16em;
  background: white;
  border: 1px solid #a3a3a3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.1s;

  :hover {
    transform: scale(1.01);
  }

  p {
    margin-top: -0.2em;
    width: 80%;
  }

  img {
    height: 7em;
  }
`;

// bottom section
const BottomSectionContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const BottomImgDiv = styled.div`
  width: 50%;
  }
`;

const BottomTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  h2 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    line-height: 46px;
    width: 12em;
    text-align: center;
  }
  input {
    height: 3em;
    width: 100%;
    background: #ffffff;
    border: 1px solid #ada8a8;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    padding-left: 1em;
  }
`;

const BottomButton = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 1.5em;
  width: 95%;
  padding: 1em;
  border: none;
  font-family: Ubuntu;
  font-size: 14px;
  margin-top: 2em;
  text-align: center;
  vertical-align: middle;
  :focus {
    outline: none;
  }
  :active {
    outline: none;
    transform: translateY(2px);
  }
`;

//footer
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

// react components

const SignUp = () => {
  return (
    <SignupContainer>
      <input placeholder="Enter your email" />
      <StyledButton theme={buttonTheme}>Get Started</StyledButton>
    </SignupContainer>
  );
};

const Landing = () => {
  return (
    <div>
      <LandingWrapper>
        <NavbarContainer>
          <LogoTitleContainer>
            <Logo />
            <NavTitleContainer>
              <h1>DevCoach</h1>
            </NavTitleContainer>
          </LogoTitleContainer>
          <LinksContainer>
            <NavbarLink>
              <a href="#">FAQ</a>
            </NavbarLink>
            <NavbarLink>
              <a href="#">About</a>
            </NavbarLink>
            <a href="/login">
              <StyledButton theme={buttonTheme}>LOGIN</StyledButton>
            </a>
            <a href="/register">
              <StyledButton theme={invertTheme}>SIGN UP</StyledButton>
            </a>
          </LinksContainer>
        </NavbarContainer>
        <TopLandingContainer>
          <LandingTaglineContainer>
            <h1>
              INTERVIEWING ISN'T EASY. THAT DOESN'T MEANT IT HAS TO BE
              STRESSFUL.
            </h1>
            <h3>
              We connect developers looking to improve their interviewing
              technique with experienced pros who have mastered the technical
              interview and can coach you through the process from start to
              finish.
            </h3>
            <SignUp />
          </LandingTaglineContainer>
          <LandingRightContainer>
            <LandingVectorImageContainer>
              <img src={vector2} />
            </LandingVectorImageContainer>
          </LandingRightContainer>
        </TopLandingContainer>
        <InfoboxContainer>
          <InfoBoxTitleContainer>
            <h1>Say goodbye to second guessing.</h1>
          </InfoBoxTitleContainer>
          <InfoCardsContainer>
            <InfoCard>
              <h3>Find your coach.</h3>
              <p>
                Match with an experienced professional, hand-selected by us for
                interviewing experience and mentoring ability.
              </p>
              <img src={handshakeImg} />
            </InfoCard>
            <InfoCard>
              <h3>Find your coach.</h3>
              <p>
                Match with an experienced professional, hand-selected by us for
                interviewing experience and mentoring ability.
              </p>
              <img src={analytics} />
            </InfoCard>
            <InfoCard>
              <h3>Get hired! </h3>
              <p>
                Take advantage of your newfound interview skills and land the
                job of your dreams.
              </p>
              <img src={startup} />
            </InfoCard>
          </InfoCardsContainer>
        </InfoboxContainer>
        <BottomSectionContainer>
          <BottomImgDiv>
            <img src={getStartedVector} />
          </BottomImgDiv>
          <BottomTextStyle>
            <h2>Ready to get started?</h2>
            <input placeholder="Enter your email address" />
            <BottomButton theme={buttonTheme}>Get Started</BottomButton>
          </BottomTextStyle>
        </BottomSectionContainer>
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
              <img src={githubIcon} />
            </Icons>
            <Icons>
              <img src={facebookIcon} />
            </Icons>
            <Icons>
              <img src={instagramIcon} />
            </Icons>
            <Icons>
              <img src={linkedInIcon} />
            </Icons>
            <Icons>
              <img src={twitterIcon} />
            </Icons>
          </FooterBottomSection>
          <p>
            {' '}
            hello@dev-coach.com - copyright © Devcoach 2019. All rights
            reserved.
          </p>
        </FooterConatiner>
      </LandingWrapper>
    </div>
  );
};

export default Landing;
