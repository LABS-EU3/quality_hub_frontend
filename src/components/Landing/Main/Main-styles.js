import styled from 'styled-components';
import devices from '../../devices';

export const MainContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  .main-about-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    text-align: center;
  }

  .main-about-title {
    color: #141414;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  .main-about-intro {
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.3;
    color: #545454;
    font-weight: bold;
    max-width: 60rem;
  }

  .logo {
    color: #408f53;
  }

  .main-about-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #292d38;
    margin: 10rem 0;
    padding: 3rem 1rem;

    h4 {
      font-size: 2rem;
      text-align: center;
      color: #efefef;
      margin: 0;
    }

    .about-cards {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }

    .about-card {
      border-radius: 6px;
      box-shadow: 0px 10px 10px #161616;
      background: #efefef;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 25rem;
      max-width: 25rem;
      margin-top: 3rem;

      @media ${devices.mobile} {
        width: 80%;
      }

      .image {
        width: 100%;
      }

      img {
        border-radius: 6px 6px 0 0;
        width: 100%;
        height: 12rem;
        object-fit: cover;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
      }

      h6 {
        margin: 0;
        font-weight: bold;
        font-size: 1.6rem;
      }

      p {
        font-size: 1rem;
        padding: 0 2.2rem;
        text-align: center;
        color: #545454;
        margin: 0;
        line-height: 1.3;
      }
    }
  }

  .user-stories-container {
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: bold;
      font-size: 2.2rem;
      margin-bottom: 5rem;
      max-width: 60rem;
      padding: 0 2rem;
      text-align: center;
      line-height: 1.3;
      color: #141414;

      @media ${devices.tablet} {
        margin-bottom: 2.5rem;
      }
    }

    .user-stories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .user-story {
      margin: 1.3rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 28rem;

      p {
        line-height: 2;
        font-size: 1.1rem;
        color: #545454;

        @media ${devices.tablet} {
          text-align: center;
        }
      }
    }

    .user-header {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 1rem 0;

      @media ${devices.tablet} {
        justify-content: center;
        flex-direction: column;
      }

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 1.2rem;

        @media ${devices.tablet} {
          margin: 0 0 1rem 0;
        }
      }

      h3 {
        font-weight: bold;
        font-size: 1.4rem;
        color: #141414;
        margin: 0;
      }
    }
  }
`;
