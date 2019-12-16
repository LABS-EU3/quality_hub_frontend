import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

function SignUpForm(props) {
  return (
    <Form>
     <Field type="text" name="first name" placeholder="first name" />
     <Field type="text" name="last name" placeholder="last name" />
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <Field type="password" name="confirm password" placeholder="confirm password" />

      <button>Submit!</button>
    </Form>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password, confirmPassword } ) {
    return {
        firstName : firstName || "",
        lastName : lastName || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || ""

    }
  },
//   validationSchema: Yup.object().shape({
//     firstName: Yup.string().required('Please enter your first name'),
//     lastName: Yup.string().required('Please enter your last name'),
//     password: Yup.string().required('Please enter your password').min(6),
//     confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your passwords don\'t match')
//  })

  handleSubmit(values, props) {
      console.log(values)
    axios
      .post("https://reqres.in/api/register", values)
      .then(res => {
        // props.props.history.push('/dashboard')
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  }
})(SignUpForm);

export default connect(state => state)(FormikSignUpForm);
