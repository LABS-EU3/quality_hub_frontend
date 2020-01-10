import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import devices from './devices';
import thinking from '../img/thinking.png';
import pink from '../img/pink.jpg';
import stare from '../img/stare.jpg';
import mobileCard from '../img/mobileCard.jpg';
import CoachCard from './CoachCard';

import {
  getCoaches,
  searchCoaches,
} from '../state/actions/marketplaceActions';
// import StyledButton from './Landing';

// DUMMY DATA //

const marketplaceCoaches = [
  {
    id: 1,
    first_name: 'Jayne',
    last_name: 'Carmichael Norrie',
    email: 'jayne@musicisourforte.co.uk',
    password:
      '$2a$10$3LmQzlDtk/1NYys6kn5Ea.FH680/SzfqPWNTC3X9qZQ9.a.I1Z3vi',
    location: 'Aberdeen',
    role_id: 2,
    user_id: 1,
    avatar_url: 'https://bit.ly/325XJrX',
    experience_level: 1,
    skill_level: 1,
    description: 'Jayne is an expert in HTML',
    rating: 4.7,
    hourly_rate: 30,
    contact_url:
      'https://grok.appointedd.com/app/5df3a618fd49237ee763a793',
  },
  {
    id: 2,
    first_name: 'Liam',
    last_name: 'Sutton',
    email: 'liam@google.com',
    password:
      '$2a$10$XgS80caZEgW20Uj38NE9zuSe5jALbx28C8s6Z80Rf4o4BMz4iEe9W',
    location: 'London',
    role_id: 2,
    user_id: 2,
    avatar_url: 'https://bit.ly/2Q0cbgm',
    experience_level: 2,
    skill_level: 2,
    description: 'Liam is an expert in Node.js',
    rating: 4.8,
    hourly_rate: 35,
    contact_url:
      'https://grok.appointedd.com/app/5dee69e59fec053a906edd03',
  },
  {
    id: 3,
    first_name: 'Funmi',
    last_name: 'Talabi',
    email: 'funmi@google.com',
    password:
      '$2a$10$GN5PGxtMHX5fkAugZ5KYB.Z3/xfZoFc033frjUlTW.0OaD6mY0n8K',
    location: 'Lagos',
    role_id: 2,
    user_id: 3,
    avatar_url: 'https://bit.ly/36SwAec',
    experience_level: 3,
    skill_level: 3,
    description: 'Funmi is an expert in React',
    rating: 4.9,
    hourly_rate: 40,
    contact_url:
      'https://grok.appointedd.com/app/5dee6934c5b42f3bcf70b393',
  },
  {
    id: 4,
    first_name: 'Oladimeji',
    last_name: 'Ojo',
    email: 'ola@google.com',
    password:
      '$2a$10$GN5PGxtMHX5fkAugZ5KYB.Z3/xfZoFc033frjUlTW.0OaD6mY0n8K',
    location: 'Lagos',
    role_id: 2,
    user_id: 3,
    avatar_url: 'https://bit.ly/35I1kOT',
    experience_level: 3,
    skill_level: 3,
    description: 'Oladimeji is an expert in React',
    rating: 4.9,
    hourly_rate: 45,
    contact_url:
      'https://grok.appointedd.com/app/5dee6a896dd393114b473a73',
  },
  {
    id: 4,
    first_name: 'Dom',
    last_name: 'Eccleston',
    email: 'dom@google.com',
    password:
      '$2a$10$GN5PGxtMHX5fkAugZ5KYB.Z3/xfZoFc033frjUlTW.0OaD6mY0n8K',
    location: 'Sheffield',
    role_id: 2,
    user_id: 3,
    avatar_url: 'https://bit.ly/2FtdD5O',
    experience_level: 3,
    skill_level: 3,
    description: 'Dom is an expert in React',
    rating: 4.9,
    hourly_rate: 40,
    contact_url: 'https://www.youtube.com/watch?v=_EPM2vlPHpE',
  },
];

// STYLED COMPONENTS //
const BackgroundContainer = styled.section`
  position: fixed;
  margin-top: 70px;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// SEARCH SECTION

const SearchDiv = styled.section`
  background-image: url(${pink});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  max-width: 80vw;
  @media ${devices.large} {
    min-height: 30vh;
  }
  @media ${devices.tablet} {
    background-image: url(${stare});
    min-height: 35vh;
  }
  @media ${devices.mobile} {
    background-image: url(${mobileCard});
    /* background-color: #4fad65; */
    min-height: 20vh;
  }
  margin: 0px;
  border-bottom: 10px solid black;

  h1 {
    color: white;
    margin: 30px 0px 5px 0px;
  }

  img {
    width: 15vw;
    margin-top: 30px;
    padding: 20px 20px;

    @media ${devices.tablet} {
      display: none;
    }
  }
`;

const SearchBar = styled.div`
  margin: 10px;
  min-width: 80vw;
  max-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media ${devices.large} {
    max-height: 15vh;
    min-width: 80vw;
  }

  @media ${devices.tablet} {
    max-height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${devices.mobile} {
    min-height: 15vh;
    justify-content: center;
    align-items: center;
  }

  input {
    background-color: white;
    padding: 5px;
    min-width: 17vw;
    @media ${devices.tablet} {
      min-width: 35vw;
    }
    @media ${devices.mobile} {
      min-width: 50vw;
    }
    border: 1px solid black;
    margin: 5px 5px 5px 0px;
    border-radius: 2px;
  }
  button {
    border: none;
    background-color: #4fad65;
    border-radius: 2px;
    color: white;
    margin: 5px;
    padding: 5px 20px;
    @media ${devices.tablet} {
      background-color: black;
    }
  }
  h1 {
    font-size: 30px;
    color: black;
    @media ${devices.tablet} {
      color: rgba(252, 224, 210);
      padding: 0px;
      margin: 5px;
    }
    @media ${devices.mobile} {
      color: black;
      font-size: 20px;
    }
  }
`;

// MAIN SECTION COMPONENTS
const MainContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.115);
  max-width: 80vw;
  @media ${devices.large} {
    max-width: 80vw;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 8vw;
    border-radius: 50%;

    @media ${devices.tablet} {
      width: 15vw;
    }
    @media ${devices.mobile} {
      width: 20vw;
    }
  }
`;

function Marketplace(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [coaches, setCoaches] = useState(marketplaceCoaches);

  const handleChange = event => {
    setSearchTerm(event.target.value.toLowerCase());
    props.searchCoaches(searchTerm);
  };

  useEffect(() => {
    props.getCoaches();
  }, []);

  return (
    <BackgroundContainer>
      <SearchDiv>
        <SearchBar>
          <h1>Take your career seriously</h1>
          <input
            type='text'
            name='searchTerm'
            placeholder='search topic, name, or location'
            value={searchTerm}
            onChange={handleChange}
          />
          <button onSubmit={handleChange}>Search</button>
        </SearchBar>
      </SearchDiv>
      <MainContainer>
        {marketplaceCoaches.map(coach => (
          <CoachCard key={coach.first_name} coach={coach} />
        ))}

        {/* {props.coaches
          ? props.coaches.map(coach => (
              <CoachCard key={coach.first_name} coach={coach} />
            ))
          : null} */}
      </MainContainer>
    </BackgroundContainer>
  );
}
const mapStateToProps = state => {
  return {
    coaches: state.marketplaceReducer.coaches,
  };
};

export default connect(mapStateToProps, {
  getCoaches,
  searchCoaches,
})(Marketplace);
