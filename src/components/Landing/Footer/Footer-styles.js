import styled from 'styled-components';
import devices from '../../devices';

export const FooterContainer = styled.div`
  width: 100%;
  background: #292d38;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .footer-top {
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem 4rem 1rem;
    justify-content: center;

    .cta-message {
      margin-bottom: 1.6rem;

      h2 {
        color: #efefef;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        line-height: 1.4;
      }
    }
  }

  .footer-bottom {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1.6rem;
    color: #efefef;

    @media ${devices.tablet} {
      flex-direction: column;
    }

    .footer-content {
      width: 15rem;
      opacity: 0.3;

      @media ${devices.tablet} {
        padding: 0.5rem 0;
        text-align: center;
      }
    }
  }

  .footer-icons {
    display: flex;
    justify-content: space-between;

    img {
      width: 25px;
      height: 25px;
    }
  }

  .footer-tribute {
    text-align: right;
  }
`;
