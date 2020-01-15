import React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import Avatar from '@material-ui/core/Avatar';
import uuid from 'uuid';
import Rating from '../DataVisualization/Rating';

const StyledCoachModal = styled.div`
  .see-more {
    color: #4fad65;
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
          <div style={{ display: 'flex' }}>
            <p style={{ width: '75%' }}>{coach.description}</p>
            <Avatar
              style={{ width: '25%', height: '4rem' }}
              alt='Coach'
              src={coach.avatar_url}
            />
          </div>
          <div>
            {feedback &&
              feedback.map(feedback => (
                <div key={uuid()}>
                  <Rating rating={feedback.rating} />
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </StyledCoachModal>
  );
}