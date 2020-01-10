import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

export function ProfileSettings({ user }) {
  const classes = useStyles();

  console.log(user);

  const initialUserInfo = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleChange = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  useEffect(() => {}, []);

  return (
    <StyledSettingsWrap>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
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
                  label='First Name'
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
                  label='Last Name'
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
                  label='Email Address'
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
              <button>cancel</button>
              <button>save changes</button>
            </StyledButtonDiv>
          </form>
        </div>
      </Container>
    </StyledSettingsWrap>
  );
}

const mapStateToProps = state => ({
  user: state.userReducer,
});

export default connect(mapStateToProps, {})(ProfileSettings);

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
