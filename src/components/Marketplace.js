import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import devices from './devices';
import logo from '../img/firelogo.png';

// DUMMY DATA //
const marketplaceUsers = [
  {
    first_name: 'Jayne',
    last_name: 'Carmichael Norrie',
    email: 'jayne@musicisourforte.co.uk',
    password: 'chico',
    role_id: 2,
  },
  {
    first_name: 'Liam',
    last_name: 'Sutton',
    email: 'liam@google.com',
    password: 'liam',
    role_id: 2,
  },
  {
    first_name: 'Funmi',
    last_name: 'Talabi',
    email: 'funmi@google.com',
    password: 'funmi',
    role_id: 2,
  },
];

const marketplaceCoaches = [
  {
    user_id: 1,
    avatar_url: 'https://bit.ly/325XJrX',
    experience_level: 1,
    skill_level: 1,
    description: 'Jayne is an expert in HTML',
  },
  {
    user_id: 2,
    avatar_url: 'https://bit.ly/36SwAec',
    experience_level: 1,
    skill_level: 1,
    description: 'Funmi is an expert in React',
  },
  {
    user_id: 3,
    avatar_url: 'https://bit.ly/2Q0cbgm',
    experience_level: 1,
    skill_level: 1,
    description: 'Liam is an expert in Node.js',
  },
];

// STYLED COMPONENTS //
const BackgroundContainer = styled.section`
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid blue;

  @media ${devices.tablet} {
    border: 3px solid orange;
  }

  @media ${devices.mobile} {
    border: 3px solid green;
  }
`;

// NAVIGATION STYLED COMPONENTS //
const NavigationContainer = styled.div`
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #cdc7c7;
`;
const LogoAndNameContainer = styled.div`
  font-family: Ubuntu;
  font-size: 18px;
  background: white;
  height: 3em;
  width: 70vw;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  height: 10em;
  width: 5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
  padding: none;
  margin: none;
  position: 0;
`;

const TitleContainer = styled.div`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  color: #459a59;
  font-size: 18px;

  @media ${devices.tablet} {
    font-size: 16px;
  }

  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

const NavLinkContainer = styled.div`
  font-family: Ubuntu;
  font-size: 18px;
  background: white;
  height: 3em;
  width: 28vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: black;
  }
`;

const NavLink = styled.h4`
  font-family: Ubuntu;
  color: black;
  padding: 0px 10px;
`;

// MAIN SECTION COMPONENTS
const MainContainer = styled.section`
  background-color: #ffffff;
  height: 80vh;
  width: 98vw;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 3px solid pink;

  img {
    width: 8vw;
    border-radius: 50%;
  }

  @media ${devices.tablet} {
    border: 3px solid yellow;
  }

  @media ${devices.mobile} {
    border: 3px solid red;
  }
`;

const CoachCard = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #cdc7c7;

  @media ${devices.tablet} {
    flex-wrap: wrap;
  }

  @media ${devices.mobile} {
    border: 3px solid red;
  }

  button {
    width: 8vw;
    border: none;
    background-color: dodgerblue;
    color: white;

    @media ${devices.tablet} {
      background-color: #4fda65;
    }
    @media ${devices.mobile} {
      border: 3px solid red;
    }
  }
`;

function Marketplace(props) {
  return (
    <BackgroundContainer>
      <NavigationContainer>
        <LogoAndNameContainer>
          <Logo />
          <TitleContainer>
            <h2>Dev Coach</h2>
          </TitleContainer>
        </LogoAndNameContainer>

        <NavLinkContainer>
          <NavLink>FAQ</NavLink>
          <NavLink>
            <Link to='/dashboard'>Settings</Link>
          </NavLink>
        </NavLinkContainer>
      </NavigationContainer>

      <h1>Choose your Dev Coach</h1>
      <MainContainer>
        {marketplaceCoaches.map(info => (
          <CoachCard>
            <img src={info.avatar_url} />
            <h2>{info.first_name}</h2>
            <p>{info.description}</p>
            <button>Book Now</button>
          </CoachCard>
        ))}
      </MainContainer>
    </BackgroundContainer>
  );
}

export default Marketplace;
