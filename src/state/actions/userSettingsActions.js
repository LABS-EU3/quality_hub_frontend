import axios from 'axios';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;

export const updateUserInfo = (userId, userInfo) => dispatch => {
  dispatch({ type: types.USER_INFO_UPDATE });
  axios
    .put(`http://localhost:5000/user/${userId}`, userInfo)
    .then(res => {
      //   console.log(res);
      dispatch({
        type: types.USER_INFO_UPDATE_SUCCESSFUL,
        payload: res.data.user,
        message: res.data.message,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: types.USER_INFO_UPDATE_FAILED,
        payload: err.response.data.message,
      });
    });
};

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
      // props.history.push('/dashboard');
    })
    .catch(err => {
      dispatch({
        type: types.LOGIN_ERROR,
        payload: err.response.data.message,
      });
    });
};
