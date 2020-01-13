import * as types from '../actions/interviewActions';

const initialState = {
  peerId: null,
  error: '',
  isLoading: false,
};

function interviewReducer(state = initialState, action) {
  switch (action.type) {
    case types.VIDEO_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.VIDEO_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        peerId: action.payload,
      };

    case types.VIDEO_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default interviewReducer;
