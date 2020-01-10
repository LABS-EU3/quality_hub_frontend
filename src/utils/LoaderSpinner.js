import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #16d47b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderSpinner = () => <StyledSpinner />;

export default LoaderSpinner;
