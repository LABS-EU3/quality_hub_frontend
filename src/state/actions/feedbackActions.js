import axiosWithAuth from '../../utils/axiosWithAuth';

export const GET_FEEDBACK_START = 'GET_FEEDBACK_START';
export const GET_FEEDBACK_ERROR = 'GET_FEEDBACK_ERROR';
export const GET_FEEDBACK_SUCCESSFUL = 'GET_FEEDBACK_SUCCESSFUL';
export const GIVE_FEEDBACK_START = 'GIVE_FEEDBACK_START';
export const GIVE_FEEDBACK_ERROR = 'GIVE_FEEDBACK_ERROR';
export const GIVE_FEEDBACK_SUCCESSFUL = 'GIVE_FEEDBACK_SUCCESSFUL';

const url = process.env.REACT_APP_BASE_URL;

export const getFeedback = (coach_student_id, role) => dispatch => {
  dispatch({ type: GET_FEEDBACK_START });

  axiosWithAuth()
    .get(`${url}feedback/${coach_student_id}`, {
      params: { role },
    })
    .then(res => {
      dispatch({
        type: GET_FEEDBACK_SUCCESSFUL,
        payload: res.data.feedback,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_FEEDBACK_ERROR,
        payload: err.response.data.message,
      });
    });
};

export const giveFeedback = (
  user_role,
  appointment_id,
  rating,
  feedback,
) => dispatch => {
  dispatch({ type: GIVE_FEEDBACK_START });

  axiosWithAuth()
    .post(`${url}feedback`, {
      user_role,
      appointment_id,
      rating,
      feedback,
    })
    .then(res => {
      dispatch({
        type: GIVE_FEEDBACK_SUCCESSFUL,
        payload: res.data.feedback,
      });
    })
    .catch(err => {
      dispatch({
        type: GIVE_FEEDBACK_ERROR,
        payload: err.response.data.message,
      });
    });
};
