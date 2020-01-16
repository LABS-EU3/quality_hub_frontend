import React, { useState } from 'react';
import styled from 'styled-components';
import DashboardNavDropDown from './DashboardNavDropDown';
import ben from '../img/ben.PNG';

const DashboardNav = () => {
  const [dropDown, setDropDown] = useState(null);

  const handleClick = event => {
    setDropDown(event.currentTarget);
  };

  const handleClose = () => {
    setDropDown(null);
  };

  return (
    <NavContainer>
      <nav className='rightNav'>
        <div className='profileMenu'>
          <p>Benjamin</p>
          {/* <img src={ben} alt='' /> */}
        </div>
        <DashboardNavDropDown
          overlay={DashboardNavDropDown}
          placement='bottomRight'
          dropDown={dropDown}
          keepMounted
          open={Boolean(dropDown)}
          onClose={handleClose}
          handleClick={handleClick}
        ></DashboardNavDropDown>
      </nav>
    </NavContainer>
  );
};

export default DashboardNav;

const NavContainer = styled.div`
  color: #101010;
  height: 43px;
  display: flex;
  flex-direction: row;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  nav.leftNav {
    display: flex;
    margin: 1.5em;
  }

  nav.rightNav {
    display: flex;
    align-items: center;
    margin: 1.5em;

    .profileMenu {
      display: flex;
      align-items: center;
      p {
        font-weight: 500;
        margin: 0;
        margin-right: 0.5em;
      }

      img {
        width: 30px;
        height: auto;
        border-radius: 50%;
      }
    }

    .profileMenu:hover {
      cursor: pointer;
    }
  }
`;
