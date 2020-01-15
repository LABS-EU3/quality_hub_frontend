import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { StyledButton, buttonTheme, Logo } from '../Landing';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';

const NavLogo = styled(Logo)`
  a {
    width: 1.5rem;
    height: 1rem;
  }
`;

const StyledError = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
`;

const ThisGreyBackgroundContainer = styled(GreyBackgroundContainer)`
  /* fonts should be global
  font-family: ABeeZee;
   */
`;

const StudentForm = ({ touched, errors, isSubmitting }) => {
  return (
    <div>
      <ThisGreyBackgroundContainer>
        <FormCard>
          <Link to='/userrole'>
            <NavLogo />
          </Link>
          <h1>Student Form</h1>
          <FormContainer>
            <Form>
              <div>
                <Field
                  type='text'
                  name='userLocation'
                  placeholder='Location'
                />
                {errors.userLocation && touched.userLocation && (
                  <StyledError>{errors.userLocation}</StyledError>
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
                <Field
                  type='text'
                  name='confidence'
                  placeholder='Select Confidence Level'
                />
                {errors.confidence && touched.confidence && (
                  <StyledError>{errors.confidence}</StyledError>
                )}
              </div>
              <div>
                <StyledButton
                  type='submit'
                  disabled={isSubmitting}
                  theme={buttonTheme}
                >
                  Submit
                </StyledButton>
              </div>
            </Form>
          </FormContainer>
        </FormCard>
      </ThisGreyBackgroundContainer>
    </div>
  );
};

const FormikStudentForm = withFormik({
  mapPropsToValues({ userLocation, experience, confidence }) {
    return {
      userLocation: userLocation || '',
      experience: experience || '',
      confidence: confidence || '',
    };
  },
  validationSchema: Yup.object().shape({
    userLocation: Yup.string().required('Please enter a location'),
    experience: Yup.string().required(
      'Please enter Your experience level',
    ),
    confidence: Yup.string().required(
      'Please enter your confidence level',
    ),
  }),
  handleSubmit(values, { resetForm, setSubmitting, props }) {
    resetForm();
    setSubmitting(false);
    props.chooseUserRole(props, values, 1);
  },
})(StudentForm);

export default connect(state => state, {
  chooseUserRole,
})(FormikStudentForm);
