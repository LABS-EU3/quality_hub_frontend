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
    .put(`http://localhost:5000/user/${userId}`, userInfo)
    .then(res => {
      showSuccess();
      dispatch({
        type: types.USER_INFO_UPDATE_SUCCESSFUL,
        payload: res.data,
        message: res.data.message,
      });
      console.log();
    })
    .catch(err => {
      showError();
      dispatch({
        type: types.USER_INFO_UPDATE_FAILED,
        payload: err.response.data.message,
      });
    });
};
