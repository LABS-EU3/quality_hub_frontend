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
        payload: err.data,
      });
    });
};

export const register = (props, values) => dispatch => {
  dispatch({ type: types.SIGN_UP });
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/register`, values)
    .then(res => {
      dispatch({ type: types.SIGN_UP_SUCCESSFUL });
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        payload: res.data.user,
        message: res.data.message,
      });
      localStorage.setItem('tempuser', res.data.token);
      localStorage.setItem('id', res.data.user.id);
      window.location.reload();
    })
    .catch(err => {
      dispatch({
        type: types.SIGN_UP_ERROR,
        payload: err.response.data.message,
      });
    });
};

export const chooseUserRole = (props, values, role) => dispatch => {
  const token = localStorage.getItem('tempuser');
  const id = localStorage.getItem('id');
  axiosWithAuth()
    .put(`${url}user/${id}`, {
      role_id: role,
      location: values.userLocation,
    })
    .then(res => {
      dispatch({ type: types.USER_ROLE_CHOSEN, role });
      if (role === 1) {
        axiosWithAuth()
          .post(`${url}profile/students`, {
            experience_level: values.experience,
            confidence_level: values.confidence,
            user_id: id,
          })
          .then(studentRes => {
            dispatch({
              type: types.SET_STUDENT_ID,
              id: studentRes.data.student.id,
            });
          })
          .then(() => {
            localStorage.setItem('token', token);
            localStorage.removeItem('tempuser');
            localStorage.removeItem('id');
            window.location.reload();
          })
          .catch(err => {});
      } else {
        axiosWithAuth()
          .post(`${url}profile/coaches`, {
            experience_level: values.experience,
            skill_level: values.skills,
            user_id: id,
          })
          .then(coachRes => {
            dispatch({
              type: types.SET_COACH_ID,
              id: coachRes.data.coach.id,
            });
          })
          .then(() => {
            localStorage.setItem('token', token);
            localStorage.removeItem('tempuser');
            localStorage.removeItem('id');
            window.location.reload();
          })
          .catch(coachErr => {});
      }
    })
    .catch(err =>
      dispatch({ type: types.USER_ROLE_ERROR, error: err }),
    );
};

export const logout = props => {
  localStorage.clear();
  window.location.reload();
  return { type: types.LOGOUT };
};
