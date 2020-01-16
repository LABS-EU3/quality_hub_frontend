import axios from 'axios';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;

export const updateUserInfo = (
  userId,
  userInfo,
  showError,
  showSuccess,
) => dispatch => {
  dispatch({ type: types.USER_INFO_UPDATE });
  axios
    .put(`${url}${userId}`, userInfo)
    .then(res => {
      showSuccess();
      dispatch({
        type: types.USER_INFO_UPDATE_SUCCESSFUL,
        payload: res.data.updatedUser,
        message: res.data.message,
      });
    })
    .catch(err => {
      showError();
      dispatch({
        type: types.USER_INFO_UPDATE_FAILED,
        payload: err.response.data.message,
      });
    });
};

export const fetchUser = () => dispatch => {
  const userId = localStorage.getItem('id');

  dispatch({ type: types.FECTH_USER });
  axios
    .get(`${url}${userId}`)
    .then(res => {
      dispatch({
        type: types.FECTH_USER_SUCCESSFULLY,
        payload: res.data.user,
      });
      window.location.reload();
    })
    .catch(err => {
      dispatch({
        type: types.FECTH_USER_FAILED,
        payload: err.response.data.message,
      });
    });
};
