import * as types from '../actions/feedbackActions';

const initialState = {
  feedback: null,
  isLoading: false,
  error: null,
};

function feedback(state = initialState, action) {
  switch (action.type) {
    case types.GET_FEEDBACK_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_FEEDBACK_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        feedback: action.payload,
      };

    case types.GET_FEEDBACK_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default feedback;
