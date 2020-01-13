import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';

const StyledAppointmentCard = styled.div`
  .card {
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
  }
  .media {
    height: 10rem;
    border-radius: 50%;
    background-size: 50%;
  }
`;

const AppointmentCard = props => {
  const {
    first_name,
    last_name,
    avatar_url,
    appointment_datetime,
    appointment_topic,
    description,
    canceled,
    cancel,
    startInterview,
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

  return (
    <StyledAppointmentCard>
      <Card>
        <CardActionArea>
          <CardMedia
            class='card-thumbnail'
            image={
              avatar_url
                ? avatar_url
                : 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
            title='Coach / Student'
          />
          <CardContent class-className='card-description'>
            <Typography gutterBottom variant='h5' component='h2'>
              {`${first_name} ${last_name}`}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {appointment_topic}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {appointment_datetime}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {canceled ? (
            <p>Canceled</p>
          ) : (
            <Button onClick={cancel} size='small' color='primary'>
              Do you want to Cancel
            </Button>
          )}
          <Button
            size='small'
            color='primary'
            onClick={startInterview}
          >
            Start Interview
          </Button>
        </CardActions>
      </Card>
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
    </StyledAppointmentCard>
  );
};

export default AppointmentCard;
