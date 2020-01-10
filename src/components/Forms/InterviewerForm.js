import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field, FieldArray } from 'formik';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import * as Yup from 'yup';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import { StyledButton, buttonTheme } from '../Landing';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';
import { register } from '../../state/actions/actionCreators';
const RegisterCard = styled(FormCard)`
  width: 27em;
  height: 35em;
  font-family: ABeeZee;
  h1 {
    font-size: 24px;
  }
`;

const StyledError = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
`;

const ThisGreyBackgroundContainer = styled(GreyBackgroundContainer)`
  font-family: ABeeZee;
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
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function CoachForm({ errors, touched }) {
  const handleUserRoleSubmit = () => {};
  return (
    <ThisGreyBackgroundContainer>
      <RegisterCard>
        <h1>Coach Form</h1>
        <FormContainer>
          <Form>
            <div>
              <Field type='text' name='city' placeholder='Location' />
              {errors.city && touched.city && (
                <StyledError>{errors.city}</StyledError>
              )}
            </div>
            <div>
              <Field
                type='text'
                name='experience'
                placeholder='Select Level Of Experience'
              />
              {errors.experience && touched.experience && (
                <StyledError>{errors.experience}</StyledError>
              )}
            </div>
            <div>
              <Field type='text' name='skills' placeholder='Skills' />
              {errors.skills && touched.skills && (
                <StyledError>{errors.skills}</StyledError>
              )}
            </div>
            <div>
              <Field
                type='text'
                name='description'
                placeholder='Description'
              />
              {errors.description && touched.description && (
                <StyledError>{errors.description}</StyledError>
              )}
            </div>
            <div>
              <StyledButton
                theme={buttonTheme}
                onClick={handleUserRoleSubmit}
                type='submit'
              >
                {' '}
                Submit{' '}
              </StyledButton>
            </div>
          </Form>
        </FormContainer>
      </RegisterCard>
    </ThisGreyBackgroundContainer>
  );
}

const FormikCoachForm = withFormik({
  mapPropsToValues({ city, experience, skills, description }) {
    return {
      city: city || '',
      experience: experience || '',
      skills: skills || '',
      description: description || '',
    };
  },
  validationSchema: Yup.object().shape({
    city: Yup.string().required('Please enter your location'),
    experience: Yup.string().required('Please enter your experience'),
    skills: Yup.string().required('Please enter your skills'),
    description: Yup.string().required('Please enter a description'),
  }),
  handleSubmit(values, { props, resetForm }) {
    resetForm();
    props.chooseUserRole(props, values, 1);
  },
})(CoachForm);

export default connect(state => state, { chooseUserRole })(
  FormikCoachForm,
);
