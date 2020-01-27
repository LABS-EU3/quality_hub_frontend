import React from 'react';
import styled from 'styled-components';
import { Empty } from 'antd';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  width: 700px;
  height: 100%;
  max-width: 100%;
  background: white;
  box-shadow: 0 6px 10px rgba(50, 50, 93, 0.1);
  padding: 40px;

  @media only screen and (max-width: 600px) {
    width: 10rem;
    height: 100%;
    max-width: 80%;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: gray;
    font-size: 1.2rem;
  }

  .imgDiv {
    width: 20%;
    height: 50%;
    margin-left: 35%;
    padding-top: 30px;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  button {
    background: #4fad65;
    border: none;
    color: white;
    width: 31%;
    height: 3rem;
    border-radius: 0.4rem;
    cursor: pointer;
    margin-left: 35%;
    margin-top: 50px;
    font-size: 0.9rem;
    box-shadow: 0 4px 4px #d1d1d1;
    transition: ease-out 0.2s;

    &:hover {
      box-shadow: 0 6px 10px #d1d1d1;
      background: #1e3f1f;
      transition: ease-in 0.2s;
    }

    @media only screen and (max-width: 600px) {
      margin-left: 0%;
      width: 100%;
    }

    .link {
      text-decoration: none;
      color: white;
    }
  }
`;

const EmptyAppointment = ({ role_id }) => {
  return (
    <StyledContainer>
      <h3>You have no upcoming appointments.</h3>
      <div className='imgDiv'>
        <Empty description={false} />
      </div>
      <Link className='link' to='/marketplace'>
        {role_id === 1 && <button>Book A Coach</button>}
      </Link>
    </StyledContainer>
  );
};
export default EmptyAppointment;
