import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { StyledButton, buttonTheme, Logo } from '../Landing';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';

import { register } from '../../state/actions/authenticationActions';

const ShortInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 82%;
  }
`;

const RegisterCard = styled(FormCard)`
  width: 30em;
  height: 35em;

  h1 {
    font-size: 24px;
  }
`;

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
  align-self: flex-start;
`;

const SignUpForm = ({
  userReducer,
  isSubmitting,
  errors,
  touched,
}) => {
  return (
    <div>
      <GreyBackgroundContainer>
        <RegisterCard>
          <Link to='/'>
            <NavLogo />
          </Link>
          <h1>Sign Up To Get Started Now</h1>
          <FormContainer>
            <Form>
              <ShortInputContainer>
                <div>
                  <Field
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                  />
                  {errors.first_name && touched.first_name && (
                    <StyledError>{errors.first_name}</StyledError>
                  )}
                </div>
                <div>
                  <Field
                    type='text'
                    name='last_name'
                    placeholder='Last Name'
                  />
                  {errors.last_name && touched.last_name && (
                    <StyledError>{errors.last_name}</StyledError>
                  )}
                </div>
              </ShortInputContainer>
              <div>
                <Field
                  type='email'
                  name='email'
                  placeholder='Email'
                />
                {userReducer.signUpError ? (
                  <StyledError>{userReducer.signUpError}</StyledError>
                ) : (
                  errors.email &&
                  touched.email && (
                    <StyledError>{errors.email}</StyledError>
                  )
                )}
              </div>
              <div>
                <Field
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                {errors.password && touched.password && (
                  <StyledError>{errors.password}</StyledError>
                )}
              </div>
              <div>
                <Field
                  type='password'
                  name='confirm_password'
                  placeholder='Confirm Password'
                />
                {errors.confirm_password &&
                  touched.confirm_password && (
                    <StyledError>
                      {errors.confirm_password}
                    </StyledError>
                  )}
              </div>

              <div>
                <StyledButton
                  disabled={isSubmitting}
                  theme={buttonTheme}
                  type='submit'
                >
                  Get Started
                </StyledButton>
              </div>
            </Form>
          </FormContainer>
        </RegisterCard>
      </GreyBackgroundContainer>
    </div>
  );
};

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
    first_name: Yup.string().required('Please enter first name'),
    last_name: Yup.string().required('Please enter last name'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: Yup.string()
      .required('Please enter your password')
      .min(6, 'Must be 6 character minimum'),
    confirm_password: Yup.string()
      .oneOf(
        [Yup.ref('password'), null],
        "Your passwords don't match",
      )
      .required('Please confirm your password'),
  }),

  handleSubmit(values, { props, setSubmitting, resetForm }) {
    resetForm();
    setSubmitting(false);

    props.register(props, values);
  },
})(SignUpForm);

const mapStateToProps = state => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, { register })(
  FormikSignUpForm,
);

const ShortInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 82%;
  }
`;

const RegisterCard = styled(FormCard)`
  width: 30em;
  height: 35em;

  h1 {
    font-size: 24px;
  }
`;

const StyledError = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
  align-self: flex-start;
`;
