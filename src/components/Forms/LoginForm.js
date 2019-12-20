import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';

import { StyledButton, buttonTheme } from '../Landing';


import { login } from '../../state/actions/actionCreators';

export const GreyBackgroundContainer = styled.div`
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormCard = styled.div`
  background: white;
  height: 28em;
  width: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #cdc7c7;

  h1 {
    color: #292d38;
    margin-top: 1.5em;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 1em;

  input {
    background: #f2f2f2;
    height: 2em;
    width: 70%;
    font-family: Ubuntu, sans-serif;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    padding: 0.5em;
    font-size: 16px;
    color: #808080;
    margin-bottom: 0.5em;

    :hover {
      background: #ffffff;
    }

    :focus {
      outline: none;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 75%;
    margin-top: 1em;
  }
`;

const StyledDetails = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;

  input {
    width: 10%;
    height: 1em;
    margin: 0;
  }

  p {
    color: #292d38;
  }

  div {
    width: 60%;
    display: flex;
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }
`;

const loadingButtonTheme = {
  text: '#292d38',
  background: 'lightgray',
};

const ExtraLoginDetails = () => {
  return (
    <StyledDetails>
      <input type='checkbox' />
      <p>Remember Me</p>
      <div>
        <a href='/forgot-password'>
          <p>Forgot your password?</p>
        </a>{' '}
      </div>
    </StyledDetails>
  );
};

function LoginForm(props) {
  return (
    <GreyBackgroundContainer>
      <FormCard>
        <h1>Welcome Back!</h1>
        <FormContainer>
          <Form>
            <Field type='email' name='email' placeholder='Email' />
            <Field
              type='password'
              name='password'
              placeholder='Password'
            />
            <ExtraLoginDetails />
            <StyledButton
              theme={
                props.userReducer.isLoading
                  ? loadingButtonTheme
                  : buttonTheme
              }

              type='submit'

            >
              Sign in to your account
            </StyledButton>
            {/*             {props.userReducer.isLoading ? (
              <h3>Loading</h3>
            ) : (
              <h3>Couldn't fetch</h3>
            )} */}
          </Form>
        </FormContainer>
      </FormCard>
    </GreyBackgroundContainer>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    };
  },

  handleSubmit(values, { props }) {
    console.log(values);

    props.login(props, values);

  },
})(LoginForm);

export default connect(state => state, { login })(FormikLoginForm);
