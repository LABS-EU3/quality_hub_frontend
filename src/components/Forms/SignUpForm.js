import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


import { StyledButton, buttonTheme, invertTheme } from '../Landing';

import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';

import { register } from '../../state/actions/actionCreators';

const ShortInputContainer = styled.div`
  display: flex;
  width: 74%;
  justify-content: space-between;

  input {
    width: 44%;
  }
`;

const RegisterCard = styled(FormCard)`
  width: 30em;
  height: 35em;

  h1 {
    font-size: 24px;
  }
`;

function SignUpForm(props) {
  return (
    <GreyBackgroundContainer>
      <RegisterCard>
        <h1>Sign up to get started now</h1>
        <FormContainer>
          <Form>
            <ShortInputContainer>

              <Field
                type='text'
                name='first_name'
                placeholder='First name'
              />
              <Field
                type='text'
                name='last_name'
                placeholder='Last name'
              />
            </ShortInputContainer>
            <Field type='email' name='email' placeholder='Email' />
            <Field
              type='password'
              name='password'
              placeholder='Password'
            />
            <Field
              type='password'
              name='confirm_password'
              placeholder='Confirm Password'
            />

            <StyledButton theme={buttonTheme} type='submit'>

              Get Started
            </StyledButton>
          </Form>
        </FormContainer>
      </RegisterCard>
    </GreyBackgroundContainer>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues({
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  }) {
    return {

      first_name: first_name || '',
      last_name: last_name || '',
      email: email || '', 
      password: password || '',
      confirm_password: confirm_password || '',
    };
  },
  validationSchema: Yup.object().shape({
    first_name: Yup.string().required('Please enter your first name'),
    last_name: Yup.string().required('Please enter your last name'),
    password: Yup.string()
      .required('Please enter your password')
      .min(6),
    confirm_password: Yup.string().oneOf(

      [Yup.ref('password'), null],
      "Your passwords don't match",
    ),
  }),

  handleSubmit(values, { props }) {
    console.log(values);

    props.register(props, values);

  },
})(SignUpForm);

export default connect(state => state, { register })(
  FormikSignUpForm,
);
