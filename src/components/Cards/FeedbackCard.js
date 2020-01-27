import React from 'react';
import styled from 'styled-components';
import devices from '../../utils/devices';
import FeedbackModal from '../Modals/FeedbackModal';

export const CardContainer = styled.div`
  max-width: 25rem;
  width: 100%;
  background: white;
  border-radius: 6px;
  box-shadow: 0 6px 8px #d3d3d3;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  max-height: 25rem;
  height: 13rem;
  transition: all ease-out 0.2s;

  @media ${devices.tablet} {
    height: inherit;
  }

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
    margin: 0;
  }

  .feedback {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 0.8rem 0;
    padding: 0 1.6rem;

    @media ${devices.tablet} {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    .feedback-text-container {
      margin: 0.2rem 0 0 0.3rem;

      @media ${devices.tablet} {
        margin: 0;
        text-align: center;
      }

      .feedback-text {
        margin: 0;
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
  avatarUrl,
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
            topic={topic}
            rating={rating}
            date={date}
            avatarUrl={avatarUrl}
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
