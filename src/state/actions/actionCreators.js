// import axios from 'axios';
// import * as types from './actionTypes';

// const url = process.env.REACT_APP_BASE_URL;

// export const login = (props, values) => dispatch => {
//   dispatch({ type: types.LOGIN_START });
//   axios
//     .post(`${url}user/login`, values)
//     .then(res => {
//       dispatch({
//         type: types.LOGIN_SUCCESSFUL,
//         payload: res.data.user,
//       });
//       localStorage.setItem('token', res.data.token);
//       props.history.push('/dashboard');
//       console.log(res.data.user);
//     })
//     .catch(err => {
//       dispatch({ type: types.LOGIN_ERROR, payload: err });
//     });
// };

// export const register = (props, values) => dispatch => {
//   dispatch({ type: types.SIGN_UP });
//   dispatch({ type: types.LOGIN_START });
//   axios
//     .post(`${url}user/register`, values)
//     .then(res => {
//       dispatch({ type: types.SIGN_UP_SUCCESSFUL });
//       localStorage.setItem('user', JSON.stringify(res.data));
//       dispatch({ type: types.LOGIN_SUCCESSFUL });
//       localStorage.setItem('token', res.data.token);
//       props.history.push('/dashboard');
//     })
//     .catch(err => {
//       dispatch({ type: types.SIGN_UP_ERROR, payload: err });
//     });
// };

import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
import * as types from './actionTypes';
const url = process.env.REACT_APP_BASE_URL;
export const login = (props, values) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/login`, values)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        payload: res.data.user,
        message: res.data.message,
      });
      localStorage.setItem('token', res.data.token);
      window.location.reload();
    })
    .catch(err => {
      dispatch({
        type: types.LOGIN_ERROR,
        payload: err.response.data.message,
      });
    });
};
export const register = (props, values) => dispatch => {
  dispatch({ type: types.SIGN_UP });
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/register`, values)
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.SIGN_UP_SUCCESSFUL });
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        payload: res.data.user,
        message: res.data.message,
      });
      localStorage.setItem('tempuser', res.data.token);
      localStorage.setItem('id', res.data.user_id);
      window.location.reload();
    })
    .catch(err => {
      dispatch({
        type: types.SIGN_UP_ERROR,
        payload: err.response.data.message,
      });
    });
};
export const setStudentDetails = values => {
  const id = localStorage.getItem('id');
  axiosWithAuth()
    .post(`${url}profile/students`, {
      experience_level: values.experience,
      confidence_level: values.confidence,
      user_id: id,
    })
    .catch(err => {
      console.log(err);
    });
};
export const setCoachDetails = values => {
  const id = localStorage.getItem('id');
  axiosWithAuth()
    .post(`${url}profile/coaches`, {
      experience_level: values.experience,
      skill_level: values.confidence,
      user_id: id,
    })
    .catch(err => console.log(err));
};
export const chooseUserRole = (props, values, role) => dispatch => {
  // tempuser is a temporary token for when we have registered, but not completed part 2 of signup
  const token = localStorage.getItem('tempuser');
  const id = localStorage.getItem('id');
  axios
    // set the user's role to coach or student
    .put(`${url}user/${id}`, {
      role_id: role,
      location: values.studentLocation,
    })
    .then(res => {
      console.log(res);
      dispatch({ type: types.USER_ROLE_CHOSEN, role, id });
      if (role === 2) {
        setStudentDetails(values);
      } else {
        setCoachDetails(values);
      }
    })
    .then(() => {
      // once we have finished setting the user's data, destroy the temporary token and set login token
      localStorage.setItem('token', token);
      localStorage.removeItem('tempuser');
      localStorage.removeItem('id');
      window.location.reload();
    })
    .catch(err =>
      dispatch({ type: types.USER_ROLE_ERROR, error: err }),
    );
};
export const logout = () => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('state');
  return { type: types.LOGOUT };
};
