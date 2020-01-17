import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import Modal from 'antd/lib/modal';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Rating from '../DataVisualization/Rating';
import devices from '../devices';

const ModalContainer = styled.div`
  .open-modal-text {
    color: #4fad65;
    font-size: 0.8rem;
    cursor: pointer;
    width: 50%;

    @media ${devices.tablet} {
      width: 100%;
    }
  }
`;

const FeedbackModal = props => {
  const {
    coachFirstName,
    coachLastName,
    feedback,
    avatarUrl,
    topic,
    rating,
  } = props;
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  return (
    <ModalContainer className='modal-container'>
      <p className='open-modal-text' onClick={showModal}>
        Read full review
      </p>
      <Modal
        title={topic}
        visible={visible}
        onCancel={handleCancel}
        zIndex={10000}
        footer={null}
      >
        <div className='modal-feedback-container'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              justifyContent: 'space-around',
            }}
          >
            <p
              style={{
                // width: '75%',
                fontWeight: 'bold',
                fontSize: '1.3rem',
              }}
            >{`${coachFirstName} ${coachLastName}`}</p>
            <Avatar
              style={{
                width: '5rem',
                height: '5rem',
                borderRadius: '50%',
              }}
              alt='Coach'
              src={avatarUrl}
            />
          </div>
          <Divider />
          <div className='feedback-container'>
            <p style={{ margin: '1rem 0' }} className='feedback-text'>
              {feedback}
            </p>
            <Rating rating={rating.props.rating} />
          </div>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default FeedbackModal;
