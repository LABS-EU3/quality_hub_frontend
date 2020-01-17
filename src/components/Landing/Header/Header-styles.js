import styled from 'styled-components';
import devices from '../../devices';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 20rem;
  max-width: 50rem;
  margin-left: 4.3rem;

  @media ${devices.tablet} {
    top: 16rem;
    margin: 0;
    text-align: center;
    padding: 0 2rem;
  }

  .cta-title {
    font-size: 3rem;
    font-weight: bold;
    color: white;
    width: 100%;

    @media ${devices.mobile} {
      font-size: 2.2rem;
    }
  }

  .cta-button {
    width: 15rem;
    margin-top: 2rem;

    @media ${devices.tablet} {
      margin: 2rem auto;
    }
  }
`;
