import styled from 'styled-components';

const StyledUserType = styled.div`
  .container {
    align-items: center;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;

    .user-type-intro {
      align-items: center;
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-direction: column;
      max-width: 50%;
      margin: 1.2rem 0;
      padding-bottom: 1.4rem;
      text-align: center;

      h2 {
        font-size: 1.8rem;
      }
      span {
        color: #4fad65;
      }
      a {
        text-decoration: none;
      }
    }
  }

  .users-container {
    display: flex;
    height: 50%;
    justify-content: space-between;
    margin: 2rem 0;
    width: 70%;
  }

  .user-type-container {
    align-items: center;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    width: 40%;
  }
  .user-description {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        padding: 1rem 0;
        text-align: center;
      }
    }
    h3 {
      font-size: 1.4rem;
    }
  }
`;

export default StyledUserType;
