import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import woman from '../../img/woman.jpg';
import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import Notification from '../../components/Notifications/Notification';
import { updateUserInfo } from '../../state/actions/settingActions';

const StyledSettings = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  padding: 50px;
  padding-top: 0px;
  margin: 0 auto;
  font-family: ABeeZee;
  border: 1px solid #dbe2e8;
  align-content: center;
  align-items: center;
  background-color: #ffff;

  .button {
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
      cursor: pointer;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  paper: {
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
    width: '100%',
    marginTop: '5px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Settings(props) {
  const classes = useStyles();
  const {
    user,
    updateUserInfo,
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

  const handleChange = e => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUserInfo(
      user.id,
      userInfo,
      showErrorMessage,
      showSuccessMessage,
    );
  };

  const handleCancel = e => {
    e.preventDefault();
    props.history.push('/dashboard');
  };

  return (
    <StyledSettings>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <img
            src={!userInfo ? woman : userInfo.avatar_url}
            style={{
              paddingTop: '20px',
              width: '40%',
              borderRadius: '50%',
            }}
            alt='user'
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
                  id='confirm_password'
                  value={userInfo.confirm_password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <div className='button'>
              <button onClick={handleCancel}>cancel</button>
              <button onClick={handleSubmit}>save changes</button>
            </div>
          </form>
        </div>
      </Container>
      <Notification
        onClose={closeMessage}
        variant='success'
        message='your profile has been updated successfully'
        open={success}
      />

      <Notification
        onClose={closeMessage}
        variant='error'
        message='unable to update user profile'
        open={error}
      />
    </StyledSettings>
  );
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  success: state.notificationsReducer.success,
  error: state.notificationsReducer.error,
});

export default connect(mapStateToProps, {
  updateUserInfo,
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
})(Settings);
