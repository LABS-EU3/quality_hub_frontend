import styled, { css } from 'styled-components';
import devices from '../devices';
import logo from '../../img/firelogo.png';

const mobileHidden = css`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 4.5em;
  height: 5em;
  background-image: url(${logo});
  background-repeat: no-repeat;
  transform: scale(0.7);
  ${mobileHidden};
`;

export const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  max-width: 100%;
  background-color: #fff;
  height: 55rem;

  @media ${devices.tablet} {
    height: 45rem;
  }

  .landing-image {
    height: 100%;
    position: absolute;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(15%);
    }
  }
`;

export const buttonTheme = {
  text: 'white',
  background: '#408f53',
};

export const invertTheme = {
  text: '#4fad65',
  background: 'white',
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
  font-size: 1.2rem;
  transition: ease-out 0.2s;

  :hover {
    cursor: pointer;
    transition: ease-in 0.2s;
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
`;
