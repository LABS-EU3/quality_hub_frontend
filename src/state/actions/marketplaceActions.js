import axiosWithAuth from '../../utils/axiosWithAuth';

export const GET_COACHES_START = 'GET_COACHES_START';
export const GET_COACHES_ERROR = 'GET_COACHES_ERROR';
export const GET_COACHES_SUCCESSFUL = 'GET_COACHES_SUCCESSFUL';
export const SEARCH_FOR_KEYWORD = 'SEARCH_FOR_KEYWORD';
export const SEARCH_PRICE = 'SEARCH_PRICE';
export const SEARCH_EXPERIENCE = 'SEARCH_EXPERIENCE';

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

export const searchForKeyword = searchTerm => {
  return { type: SEARCH_FOR_KEYWORD, payload: searchTerm };
};

export const searchForPrice = price => {
  return { type: SEARCH_PRICE, payload: price };
};

export const searchForExperience = experience => {
  return { type: SEARCH_EXPERIENCE, payload: experience };
};
