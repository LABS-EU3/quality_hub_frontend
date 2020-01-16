import React from 'react';
import styled from 'styled-components';
import { Modal, Divider } from 'antd';
import Avatar from '@material-ui/core/Avatar';
import uuid from 'uuid';
import Rating from '../DataVisualization/Rating';

const StyledCoachModal = styled.div`
  .see-more {
    color: #3282b8;
    cursor: pointer;
  }
`;

export default function App(props) {
  const { getFeedback, coach, feedback } = props;
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    getFeedback(coach.id, '2');
    setVisible(true);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  return (
    <StyledCoachModal>
      <p className='see-more' onClick={showModal}>
        See more
      </p>
      <Modal
        zIndex={10000}
        title={`${coach.first_name} ${coach.last_name}`}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ width: '75%' }}>{coach.description}</p>
            <Avatar
              style={{ width: '25%', height: '6rem' }}
              alt='Coach'
              src={coach.avatar_url}
            />
          </div>
          <div>
            {feedback &&
              feedback.map(feedback => (
                <div key={uuid()}>
                  <Divider>{`${feedback.first_name} ${feedback.last_name}`}</Divider>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <p>{feedback.appointment_topic}</p>
                    <p>
                      {feedback.appointment_datetime.slice(0, 15)}
                    </p>
                    <Rating rating={feedback.rating} />
                  </div>
                  <p>{feedback.feedback}</p>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </StyledCoachModal>
  );
}
