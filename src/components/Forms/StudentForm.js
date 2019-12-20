import React from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { StyledButton, buttonTheme } from '../Landing';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';

const RegisterCard = styled(FormCard)`
  width: 30em;
  height: 35em;
  font-family: ABeeZee;

  h1 {
    font-size: 24px;
  }
  div {
    width: 75%;
    margin: 0.5rem 0;
    p {
      margin: 0.2rem 0;
    }

    input {
      width: 95%;
    }
  }
`;

const ThisGreyBackgroundContainer = styled(GreyBackgroundContainer)`
  font-family: ABeeZee;
`;

function StudentForm({ touched, errors, isSubmitting }) {
  return (
    <ThisGreyBackgroundContainer>
      <RegisterCard>
        <h1>Student Form</h1>
        <FormContainer>
          <Form>
            <div>
              {' '}
              {errors.studentLocation && touched.studentLocation && (
                <p>{errors.studentLocation}</p>
              )}
              <Field
                type='text'
                name='studentLocation'
                placeholder='Location'
              />
            </div>
            <div>
              {errors.experience && touched.experience && (
                <p>{errors.experience}</p>
              )}
              <Field
                type='text'
                name='experience'
                placeholder='Select Level Of Experience'
              />
            </div>
            <div>
              {errors.confidence && touched.confidence && (
                <p>{errors.confidence}</p>
              )}
              <Field
                type='text'
                name='confidence'
                placeholder='Select Confidence Level'
              />
            </div>
            <Link to='/dashboard'>
              <StyledButton
                type='submit'
                disabled={isSubmitting}
                theme={buttonTheme}
              >
                Submit
              </StyledButton>
            </Link>
          </Form>
        </FormContainer>
      </RegisterCard>
    </ThisGreyBackgroundContainer>
  );
}

const FormikStudentForm = withFormik({
  mapPropsToValues({ studentLocation, experience, confidence }) {
    return {
      studentLocation: studentLocation || '',
      experience: experience || '',
      confidence: confidence || '',
    };
  },
  validationSchema: Yup.object().shape({
    studentLocation: Yup.string().required('Please enter a location'),
    experience: Yup.string().required(
      'Please enter Your experience level',
    ),
    confidence: Yup.string().required(
      'Please enter your confidence level',
    ),
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    resetForm();
    setSubmitting(false);
  },
})(StudentForm);

export default FormikStudentForm;
