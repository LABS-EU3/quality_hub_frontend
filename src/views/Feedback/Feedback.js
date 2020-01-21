import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';
import Pagination from 'antd/lib/pagination';
import Loader from 'react-loader-spinner';

import { getFeedback } from '../../state/actions/feedbackActions';
import FeedbackRating from '../../components/DataVisualization/Rating';
import FeedbackCard from '../../components/Cards/FeedbackCard';
import EmptyFeedback from '../../components/Cards/EmptyFeedbackCard';

const StyledFeedback = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .ant-pagination-item-active {
      border-color: #4fad65;
    }

    .ant-pagination-item-active a {
      color: #4fad65;
    }
  }
  .loaderStyled {
    margin-top: 20vh;
  }
`;

const Feedback = ({ user, getFeedback, feedback }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);

  useEffect(() => {
    getFeedback(user.id, user.role_id);
  }, [getFeedback, user]);

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(value * 6 - 6);
      setMaxValue(value * 6);
    }
  };

  return (
    <StyledFeedback>
      {feedback ? (
        <StyledFeedback className='feedback-card-container'>
          {feedback && feedback.length ? (
            feedback
              .slice(minValue, maxValue)
              .map(feedback => (
                <FeedbackCard
                  key={uuid()}
                  rating={<FeedbackRating rating={feedback.rating} />}
                  feedback={feedback.feedback}
                  topic={feedback.appointment_topic}
                  date={feedback.appointment_datetime.slice(0, 15)}
                  coachFirstName={feedback.first_name}
                  coachLastName={feedback.last_name}
                  avatarUrl={feedback.avatar_url}
                />
              ))
          ) : (
            <EmptyFeedback />
          )}
        </StyledFeedback>
      ) : (
        <div className='loaderStyled'>
          <Loader
            type='TailSpin'
            color='#2BAD60'
            height={80}
            width={80}
          />
        </div>
      )}
      <div className='pagination'>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={6}
          onChange={handlePagination}
          total={feedback && feedback.length}
        />
      </div>
    </StyledFeedback>
  );
};

const mapStateToProps = state => {
  return {
    feedback: state.feedbackReducer.feedback,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { getFeedback })(Feedback);
