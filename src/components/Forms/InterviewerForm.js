import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  FormControl,
  Select,
  InputLabel,
  makeStyles,
  MenuItem,
  TextField,
  Box,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab/';
import { withStyles, InputBase } from '@material-ui/core';
import { countries } from './countries';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import { buttonTheme, Logo } from '../Landing';
import { GreyBackgroundContainer } from './LoginForm';
import {
  StudentCard,
  StudentFormContainer,
  FormButton,
  InfoParagraph,
} from './StudentForm';

const CoachCard = styled(StudentCard)`
  width: 50%;
  height: 35em;
  font-family: ABeeZee;
  h1 {
    font-size: 24px;
  }
`;

const CoachFormContainer = styled(StudentFormContainer)``;

const ThisGreyBackgroundContainer = styled(GreyBackgroundContainer)`
  font-family: 'Ubuntu';
`;
const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 255px',
    transition: theme.transitions.create([
      'border-color',
      'box-shadow',
    ]),
    fontFamily: ['ABeeZee'].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 600,
  },
  textField: {
    width: 600,
    marginTop: '0.6em',
    marginBottom: '0.3em',
  },
  box: {
    '& > *': {
      marginTop: '0.3em',
      marginBottom: '0.3em',
    },
  },
  description: {
    width: 600,
    paddingTop: '1em',
    paddingBottom: '2em',
  },
}));

const CoachForm = props => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    userLocation: '',
    experience: '',
    skills: '',
    description: '',
    github: '',
    linkedin: '',
  });
  return (
    <div>
      <ThisGreyBackgroundContainer>
        <CoachCard>
          <Link to='/userrole'>
            <Logo />
          </Link>
          <h1>Get Started</h1>
          <InfoParagraph>
            Tell us about yourself. What can you offer as a coach?
          </InfoParagraph>
          <CoachFormContainer>
            <Box
              className={classes.box}
              display='flex'
              flexDirection='column'
              justifyContent='space-evenly'
              alignItems='center'
            >
              <FormControl required className={classes.formControl}>
                <Autocomplete
                  name='location'
                  options={countries}
                  getOptionLabel={option => option.name}
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      userLocation: event.target.innerText,
                    })
                  }
                  renderInput={params => (
                    <TextField
                      required
                      name='location'
                      {...params}
                      label='Select your location'
                      fullWidth
                    />
                  )}
                />
              </FormControl>
              <FormControl required className={classes.formControl}>
                <InputLabel>Experience</InputLabel>
                <Select
                  placeholder='experience'
                  name='experience'
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      experience: event.target.value,
                    })
                  }
                >
                  <MenuItem value={1}>
                    I've worked for 1 - 2 years as a junior developer
                  </MenuItem>
                  <MenuItem value={2}>
                    I've worked for 2+ years as a mid-level developer
                  </MenuItem>
                  <MenuItem value={3}>
                    I've worked for 4+ years and am a senior level
                    developer
                  </MenuItem>
                  <MenuItem value={4}>
                    I've worked for 8+ years and have held senior
                    positions as a tech lead or engineering manager
                  </MenuItem>
                  <MenuItem value={5}>
                    I've worked as a developer for over 10 years,
                    including at a highly senior level
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl required className={classes.formControl}>
                <InputLabel>Skill level</InputLabel>
                <Select
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      skills: event.target.value,
                    })
                  }
                >
                  <MenuItem value={1}>
                    I'm a skilled developer
                  </MenuItem>
                  <MenuItem value={2}>
                    I'm a highly skilled developer
                  </MenuItem>
                  <MenuItem value={3}>
                    I'm an extremely skilled developer
                  </MenuItem>
                  <MenuItem value={4}>
                    I'm actually Dan Abramov
                  </MenuItem>
                  <MenuItem value={5}>
                    I solve leetcode hards in my head while I'm
                    waiting for the bus
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.description}>
                <TextField
                  fullWidth
                  multiline
                  label='Description'
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      skills: event.target.value,
                    })
                  }
                ></TextField>
              </FormControl>
              <FormButton
                theme={buttonTheme}
                onClick={() =>
                  props.chooseUserRole(props, formValues, 2)
                }
              >
                Submit
              </FormButton>
            </Box>
          </CoachFormContainer>
        </CoachCard>
      </ThisGreyBackgroundContainer>
    </div>
  );
};

export default connect(state => state, { chooseUserRole })(CoachForm);
