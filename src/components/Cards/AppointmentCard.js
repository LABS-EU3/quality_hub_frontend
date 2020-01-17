import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';

const AppointmentCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 100%;
  box-sizing: border-box;
  max-width: 100%;

  .cardContainer {
    width: 85%;
    height: 100%;
    background: white;
    border-radius: 8px;
    justify-content: center;
    border: 1px solid #dadce0;
    padding: 25px;
    box-shadow: 0 6px 10px rgba(50, 50, 93, 0.1);

    .topSection {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-style: normal;
        color: black;
        text-align: center;
        width: 40%;
      }

      .imgDiv {
        width: 90px;
        height: 90px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto;
        img {
          margin: 0 auto;
          height: auto;
          width: 100%;
        }
      }
    }

    .textDiv {
      margin-top: 30px;

      .flexText {
        display: flex;
        align-items: center;
        margin-top: -30px;
        color: #4fad65;

        p {
          font-family: 'Ubuntu, sans-serif';
          font-style: normal;
          font-weight: 500;
          font-size: 1.03rem;
          color: #3c4043;
          margin-left: 12px;
        }
      }
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: #4fad65;
    border: none;
    color: white;
    width: 38%;
    height: 2.1rem;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  button:hover {
    background: #1e3f1f;
  }
`;

export default function AppointmentCard(props) {
  const {
    first_name,
    last_name,
    avatar_url,
    appointment_datetime,
    appointment_topic,
    description,
    cancel,
  } = props;

  const [openCancelModal, setOpenCancelModal] = useState(false);

  const Transition = React.forwardRef(function Transition(
    props,
    ref,
  ) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  const handleCancelModalOpen = () => {
    setOpenCancelModal(true);
  };

  const handleCancelModalClose = () => {
    setOpenCancelModal(false);
  };

  const date = appointment_datetime;
  const dateSliced = date.slice(0, 15);

  const time = appointment_datetime;
  const timeSliced = time.slice(16, 28);

  return (
    <>
      <AppointmentCardDiv>
        <div className='cardContainer'>
          <div className='topSection'>
            <h3>{`${first_name} ${last_name}`}</h3>
            <div className='imgDiv'>
              <img
                alt='user'
                src={
                  avatar_url
                    ? avatar_url
                    : 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }
              />
            </div>
          </div>
          <div className='textDiv'>
            <div className='flexText'>
              <i className='fas fa-shopping-bag' />
              <p>{appointment_topic}</p>
            </div>
            <div className='flexText'>
              <i className='far fa-calendar-check' />
              <p className='dateTime'>{dateSliced}</p>
            </div>
            <div className='flexText'>
              <i className='far fa-clock' />
              <p>{timeSliced}</p>
            </div>
            <p>{description}</p>
          </div>
          <ButtonDiv>
            <button onClick={handleCancelModalOpen}>Cancel</button>
            <button>Message</button>
          </ButtonDiv>
        </div>
      </AppointmentCardDiv>

      <Dialog
        open={openCancelModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancelModalClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'> </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Are you sure you want to cancel appointment ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelModalClose} color='primary'>
            No
          </Button>
          <Button onClick={cancel} color='primary'>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
