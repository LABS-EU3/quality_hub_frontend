import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import Notification from '../Notifications/Notification';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import liam from '../../img/liam.PNG';
import { be } from 'date-fns/locale';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {
  updateUserInfo,
  fetchUser,
} from '../../state/actions/userSettingsActions';

export function ProfileSettings(props) {
  const classes = useStyles();
  const {
    user,
    updateUserInfo,
    fetchUser,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
  } = props;

  const initialUserInfo = {
    first_name: user && user.first_name,
    last_name: user && user.last_name,
    email: user && user.email,
    password: '',
    confirm_password: '',
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  // const refUser = useRef(user);
  // useEffect(() => {
  //   // fetchUser();
  //   // setTimeout(
  //   user &&
  //     setUserInfo({
  //       first_name: user.first_name,
  //       last_name: user.last_name,
  //       email: user.email,
  //       password: user.password,
  //     });
  //   //   2000,
  //   // );
  // }, [refUser]);

  const handleChange = e => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    console.log(userInfo);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUserInfo(
      user.id,
      userInfo,
      showErrorMessage,
      showSuccessMessage,
    );
    setTimeout(() => {
      props.history.push('/dashboard');
    }, 2500);
  };

  const handleCancel = e => {
    e.preventDefault();
    props.history.push('/dashboard');
  };

  return (
    <StyledSettingsWrap>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <img
            src={liam}
            style={{
              paddingTop: '20px',
              width: '40%',
              borderRadius: '50%',
            }}
          />

          <Typography component='h1' variant='h5'>
            Personal Information
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='first_name'
                  variant='outlined'
                  required
                  fullWidth
                  id='first_name'
                  label={userInfo.first_name}
                  value={userInfo.first_name}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label={userInfo.last_name}
                  name='last_name'
                  autoComplete='lname'
                  value={userInfo.last_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label={userInfo.email}
                  name='email'
                  autoComplete='email'
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='new password'
                  type='password'
                  id='password'
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='confirm_password'
                  label='confirm new password'
                  type='password'
                  id='password'
                  value={userInfo.confirm_password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <StyledButtonDiv>
              <button onClick={handleCancel}>cancel</button>
              <button onClick={handleSubmit}>save changes</button>
            </StyledButtonDiv>
          </form>
        </div>
      </Container>
      <Notification
        onClose={props.closeMessage}
        variant='success'
        message='your profile has been updated successfully'
        open={success}
      />

      <Notification
        onClose={props.closeMessage}
        variant='error'
        message='unable to update user profile'
        open={error}
      />
    </StyledSettingsWrap>
  );
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  success: state.notificationsReducer.success,
  error: state.notificationsReducer.error,
});

export default connect(mapStateToProps, {
  updateUserInfo,
  fetchUser,
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
})(ProfileSettings);

// Styles for the Component //

const StyledSettingsWrap = styled.div`
  padding: 50px;
  padding-top: 0px;
  margin: 0 auto;
  font-family: ABeeZee;
  border: 1px solid #dbe2e8;
  align-content: center;
  align-items: center;
  background-color: #ffff;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
    background-color: #1976d2;
    background-color: #4fad65;

    padding: 18px;
    font-family: ABeeZee, Roboto, Helvetica, Arial, sans-serif;
    border-radius: 4px;
    border: none;
    margin-top: 17px;
    color: #ffff;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const useStyles = makeStyles(theme => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: '40px',
    padding: '50px',
    paddingTop: '0px',
    backgroundColor: '#81827c',
    borderRadius: '50%',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '5px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
