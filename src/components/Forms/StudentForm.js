import React from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { StyledButton, buttonTheme } from '../Landing';
import {
  chooseUserRole,
  setStudentDetails,
} from '../../state/actions/authenticationActions';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';

const RegisterCard = styled(FormCard)`
  /* width: 30em; */
  /* height: 30em; */
  font-family: ABeeZee;

  h1 {
    font-size: 24px;
  }
  div {
    width: 93%;
    margin: 0.5rem 0;
    p {
      margin: 0.2rem 0;
    }

    input {
      width: 91%;
    }

    button {
      width: 98%;
    }
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

function StudentForm({ touched, errors, isSubmitting }) {
  return (
    <ThisGreyBackgroundContainer>
      <RegisterCard>
        <h1>Student Form</h1>
        <FormContainer>
          <Form>
            <div>
              <Field
                type='text'
                name='studentLocation'
                placeholder='Location'
              />
              {errors.studentLocation && touched.studentLocation && (
                <StyledError>{errors.studentLocation}</StyledError>
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
  handleSubmit(values, { resetForm, setSubmitting, props }) {
    resetForm();
    setSubmitting(false);
    props.chooseUserRole(props, values, 2);
  },
})(StudentForm);

export default connect(state => state, {
  chooseUserRole,
  setStudentDetails,
})(FormikStudentForm);
