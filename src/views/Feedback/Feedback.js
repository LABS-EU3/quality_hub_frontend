import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';
import { getFeedback } from '../../state/actions/feedbackActions';
import FeedbackRating from '../../components/DataVisualization/Rating';
import FeedbackCard from '../../components/Cards/FeedbackCard';

const StyledFeedback = styled.div``;

const Feedback = props => {
  React.useEffect(() => {
    props.getFeedback(props.user.id, props.user.role_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledFeedback>
      {props.feedback &&
        props.feedback.map(feedback => (
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
