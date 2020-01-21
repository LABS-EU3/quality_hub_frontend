import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import General from './GeneralFaq';
import Profile from './ProfileFaq';
import Payment from './PaymentFaq';
import Navbar from './Navbar';
import Footer from './Footer';

// Main content

const MainContainer = styled.div`
  background: #f6f9fc;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 50px;
    font-family: 'Ubuntu', sans-serif;
    color: #4fad65;
    font-size: 40px;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  .styledBox {
    width: 12em;
    border-radius: 10px;
    height: 150px;
    margin: 3em;
    border-width: 10px;
    border: 2px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    box-shadow: 0 6px 10px rgba(50, 50, 93, 0.1);

    h3 {
      text-align: center;
      color: grey;
    }
  }

  .activeClassNav {
    background: #1e3f1f;
    border: 2px solid white;

    h3 {
      color: white;
    }
  }
`;

const iconStyles = {
  fontSize: '3.5em',
  color: '#4fad65',
};

const LandingFaq = () => {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <h2>FAQs</h2>
        <CategoryContainer>
          <NavLink
            className='styledBox'
            activeClassName='activeClassNav'
            to='/faq/general'
          >
            <h3>General</h3>
            <SearchIcon style={iconStyles} />
          </NavLink>

          <NavLink
            className='styledBox'
            activeClassName='activeClassNav'
            to='/faq/profile'
          >
            <h3>Profile</h3>
            <PersonIcon style={iconStyles} />
          </NavLink>
          <NavLink
            className='styledBox'
            activeClassName='activeClassNav'
            to='/faq/payment'
          >
            <h3>Payment</h3>
            <PaymentIcon style={iconStyles} />
          </NavLink>
        </CategoryContainer>

        <Route exact path='/faq/general' component={General} />
        <Route exact path='/faq/profile' component={Profile} />
        <Route exact path='/faq/payment' component={Payment} />
      </MainContainer>
      <Footer />
    </div>
  );
};

export default LandingFaq;
