import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';
import { getFeedback } from '../../state/actions/feedbackActions';
import FeedbackRating from '../../components/DataVisualization/Rating';
import FeedbackCard from '../../components/Cards/FeedbackCard';

const StyledFeedback = styled.div``;

const Feedback = props => {
  const { getFeedback, user, feedback } = props;

  React.useEffect(() => {
    getFeedback(user.id, user.role_id);
  }, [getFeedback, user.id, user.role_id]);
  return (
    <StyledFeedback>
      {feedback &&
        feedback.map(feedback => (
          <FeedbackCard
            key={uuid()}
            rating={<FeedbackRating rating={feedback.rating} />}
            feedback={feedback.feedback}
            topic={feedback.appointment_topic}
            date={feedback.appointment_datetime.slice(0, 15)}
            coachFirstName={feedback.first_name}
            coachLastName={feedback.last_name}
          />
        ))}
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
