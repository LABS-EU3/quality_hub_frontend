import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {
  giveFeedback,
  saveRating,
  saveFeedback,
} from '../../state/actions/feedbackActions';
import GiveRating from '../../components/DataVisualization/GiveRating';
import FeedbackInput from '../../components/Inputs/FeedbackInput';

const StyledGiveFeedback = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.6rem;
  }

  .rating-button-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 1rem;
  }

  .button {
    background-color: #4fad65;
    font-weight: 200;
    width: 8rem;
    margin-top: 1.2rem;
  }
`;

function GiveFeedback(props) {
  const { feedback, rating, idRole } = props;
  const { saveFeedback, saveRating, giveFeedback } = props;

  return (
    <StyledGiveFeedback className='give-feedback-container'>
      <h1>Add Your Review</h1>
      <FeedbackInput saveFeedback={saveFeedback} />
      <div className='rating-button-container'>
        <GiveRating saveRating={saveRating} />
        <Button
          onClick={() =>
            giveFeedback({ ...idRole, rating, feedback }, props)
          }
          className='button'
          variant='contained'
          color='primary'
        >
          Submit
        </Button>
      </div>
    </StyledGiveFeedback>
  );
}

const mapStateToProps = state => {
  return {
    coaches: state.marketplaceReducer.coaches,
    feedback: state.feedbackReducer.giveFeedback,
    rating: state.feedbackReducer.rating,
    idRole: state.feedbackReducer.idRole,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  giveFeedback,
  saveRating,
  saveFeedback,
})(GiveFeedback);
