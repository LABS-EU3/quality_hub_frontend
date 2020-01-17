import React from 'react';
import styled from 'styled-components';
import devices from '../devices';
import FeedbackModal from '../Modals/FeedbackModal';

const CardContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  background: white;
  border-radius: 4px;
  box-shadow: 0 6px 8px #d3d3d3;
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  transition: all ease-out 0.2s;

  &:hover {
    transition: all ease-in 0.1s;
    transform: scale(1.018);
    box-shadow: 0 16px 12px #e8e8e8;
  }

  .title-container {
    text-align: center;
    padding: 0 1rem;
  }

  .title {
    font-size: 1.2rem;
  }

  .feedback {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 1.6rem 0;
    padding: 0 2rem;

    @media ${devices.tablet} {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    .feedback-text-container {
      margin-left: 2rem;

      @media ${devices.tablet} {
        margin: 0;
        text-align: center;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem 0 1rem;
    width: 95%;
    border-top: 1px solid #eaeaea;

    @media ${devices.tablet} {
      flex-direction: column;
    }

    .footer-text {
      color: #a8a8a8;
      font-weight: 500;
      margin: 0;
    }
  }
`;

const FeedbackCard = ({
  rating,
  feedback,
  date,
  coachFirstName,
  coachLastName,
  topic,
}) => {
  return (
    <CardContainer>
      <div className='title-container'>
        <h4 className='title'>{topic}</h4>
      </div>
      <div className='feedback'>
        <div className='rating'>{rating}</div>
        <div className='feedback-text-container'>
          <p className='feedback-text'>{feedback.slice(0, 65)}...</p>
          <FeedbackModal
            coachFirstName={coachFirstName}
            coachLastName={coachLastName}
            feedback={feedback}
          />
        </div>
      </div>

      <div className='footer'>
        <p className='footer-text'>
          {coachFirstName} {coachLastName}
        </p>
        <p className='date footer-text'>{date}</p>
      </div>
    </CardContainer>
  );
};

export default FeedbackCard;
