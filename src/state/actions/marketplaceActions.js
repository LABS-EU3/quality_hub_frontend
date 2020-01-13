import axiosWithAuth from '../../utils/axiosWithAuth';

export const GET_COACHES_START = 'GET_COACHES_START';
export const GET_COACHES_ERROR = 'GET_COACHES_ERROR';
export const GET_COACHES_SUCCESSFUL = 'GET_COACHES_SUCCESSFUL';
export const SEARCH_COACHES = 'SEARCH_COACHES';

const url = process.env.REACT_APP_BASE_URL;

export const getCoaches = () => dispatch => {
  dispatch({ type: GET_COACHES_START });

  axiosWithAuth()
    .get(`${url}profile/coaches`)
    .then(response => {
      dispatch({
        type: GET_COACHES_SUCCESSFUL,
        payload: response.data.coaches,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_COACHES_ERROR,
        payload: error.response.data,
      });
    });
};

export const searchCoaches = searchTerm => {
  return { type: SEARCH_COACHES, payload: searchTerm };
};
