import styled from 'styled-components';

const StyledBooking = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;

  .instructions {
    text-align: center;
    margin-top: 1rem;
  }

  .steps-container {
    margin: 1rem 0;

    .select-container {
      display: flex;
      flex-direction: column-reverse;
      height: 7.2rem;
      justify-content: space-between;
    }

    .payment-container {
      width: 20rem;
      margin: 0 auto;
    }

    .payment-buttons-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 2.4rem 1rem 1rem 1rem;
      box-shadow: 0 6px 10px #d3d3d3;
      border-radius: 6px;
      margin: 0;
    }

    .stripe-checkout {
      width: 12.5rem;
      margin-bottom: 0.9rem;
      outline: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
`;

export default StyledBooking;
