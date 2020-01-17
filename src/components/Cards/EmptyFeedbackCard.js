import React from 'react';
import styled from 'styled-components';
import { Empty } from 'antd';

const StyledContainer = styled.div`
  width: 700px;
  height: 100%;
  max-width: 100%;
  margin-top: 50px;
  background: white;
  box-shadow: 0 6px 10px rgba(50, 50, 93, 0.1);
  padding: 40px;

  @media only screen and (max-width: 600px) {
    margin-top: 200px;
    width: 10rem;
    height: 50%;
    max-width: 80%;
    margin-left: -5%;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: gray;

    @media only screen and (max-width: 600px) {
      margin-top: 35px;
    }
  }

  .imgDiv {
    width: 50%;
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

    .link {
      text-decoration: none;
      color: white;
    }
  }

  button:hover {
    background: #1e3f1f;
  }
`;

const EmptyFeedback = () => {
  return (
    <StyledContainer>
      <h3>You Do Not Have Any Feedback</h3>
      <div className='imgDiv'>
        <Empty description={false} />
      </div>
    </StyledContainer>
  );
};
export default EmptyFeedback;
