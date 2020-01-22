import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import TodayIcon from '@material-ui/icons/Today';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const StyledCoachCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 17rem;
  height: 22rem;
  padding: 1.5rem;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 300;
  background: white;
  box-shadow: 0 6px 10px #d3d3d3;

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    .header-text {
      width: 100%;
    }

    .header-photo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .picture {
        width: 5.5rem;
        height: 5.5rem;
      }
    }
  }

  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 0.96rem;
    color: #3c4043;
    margin: 0;
  }

  h4 {
    text-align: center;
    font-weight: lighter;
    margin: 0;
  }

  .bullet-points {
  }

  .bullet {
    display: flex;
    align-items: center;
    padding: 0.2em;
  }

  .icon {
    margin-right: 0.3em;
  }

  .description {
    margin-bottom: 0.6em;
  }

  .reviews {
    display: flex;
    justify-content: space-between;
  }

  .footer {
    margin-top: 0.5em;
    display: flex;
    width: 100%;
    justify-content: space-between;
    a {
      text-decoration: none;
    }

    .button {
      background-color: #4fad65;
    }

    .cancel-button {
    }
  }
`;

const mapExperience = experience => {
  switch (experience) {
    default:
      return '';
    case 1:
      return 'Junior developer';
    case 2:
      return 'Mid-level developer';
    case 3:
      return 'Senior developer';
    case 4:
      return 'Highly experienced developer';
  }
};

export const NewAppointmentCard = props => {
  const { appointment, saveIdRole } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const time = appointment.appointment_datetime.slice(0, 15);
  const date = appointment.appointment_datetime.slice(16, 28);

  return (
    <>
      <StyledCoachCard>
        <div className='header'>
          <div className='header-text'>
            <h3>{`${appointment.first_name} ${appointment.last_name}`}</h3>
            <h4>{mapExperience(appointment.experience_level)}</h4>
          </div>
          <div className='header-photo'>
            <Avatar
              className='picture'
              alt='appointment'
              src={appointment.avatar_url || null}
            />
          </div>
        </div>

        <div className='bullet-points'>
          <div className='bullet'>
            <CodeIcon className='icon' />
            {appointment.appointment_topic}
          </div>
          <div className='bullet'>
            <TodayIcon className='icon' />
            {date}
          </div>
          <div className='bullet'>
            <ScheduleIcon className='icon' />
            {time}
          </div>
          <div className='bullet'>
            <TimelapseIcon className='icon' />
            {appointment.appointment_length}
          </div>
        </div>

        <div className='description'>
          {appointment.description ? (
            <p>{appointment.description.slice(0, 80)}</p>
          ) : (
            ''
          )}
        </div>

        <div className='footer'>
          <Button
            onClick={handleClickOpen}
            size='small'
            className='cancel-button'
            variant='contained'
            color='secondary'
            startIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
          <Link to='/givefeedback'>
            <Button
              size='small'
              className='button'
              variant='contained'
              color='primary'
              endIcon={<Icon>send</Icon>}
              onClick={() => saveIdRole()}
            >
              Interview
            </Button>
          </Link>
        </div>
      </StyledCoachCard>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'></DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to cancel appointment ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            No
          </Button>
          <Button onClick={props.cancel} color='primary' autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewAppointmentCard;
