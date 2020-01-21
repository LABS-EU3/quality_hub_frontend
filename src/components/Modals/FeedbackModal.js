import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import Modal from 'antd/lib/modal';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Rating from '../DataVisualization/Rating';

const ModalContainer = styled.div`
  .open-modal-text {
    color: #4fad65;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

const FeedbackModal = props => {
  const {
    date,
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
              alignItems: 'flex-start',
              marginBottom: '1.1rem',
            }}
          >
            <p style={{ fontSize: '1.1rem', margin: '0 0.3rem 0 0' }}>
              Rating
            </p>
            <Rating rating={rating.props.rating} />
          </div>
          <Divider />
          <div
            className='feedback-container'
            style={{ margin: '1.2rem 0' }}
          >
            <p style={{ fontSize: '1.1rem' }}>Feedback</p>
            <p className='feedback-text'>{feedback}</p>
          </div>
          <Divider />
          <div
            className='rating'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '1rem 0 0 0',
            }}
          >
            <div
              className='user-info'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Avatar
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                }}
                alt='Coach'
                src={avatarUrl}
              />
              <p
                style={{ margin: '0 0 0 .3rem' }}
              >{`${coachFirstName} ${coachLastName}`}</p>
            </div>

            <p style={{ margin: '0', color: '#a8a8a8' }}>{date}</p>
          </div>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default FeedbackModal;
