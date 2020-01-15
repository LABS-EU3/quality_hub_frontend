import * as types from '../actions/actionTypes';

const initialState = {
  user: [],
  loginError: '',
  signUpError: '',
  isLoading: false,
  isLoggedIn: false,
  userUpdated: false,
  userUpdateError: '',
  welcomeMessage: '',
  userHasChosenRole: false,
  userRoleError: '',
  id: null,
  role_id: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        loginError: '',
        signUpError: '',
        welcomeMessage: '',
      };
    case types.LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
        welcomeMessage: action.message,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    default:
      return state;
    case types.USER_ROLE_CHOSEN:
      return {
        ...state,
        userHasChosenRole: true,
        userRole: action.role,
      };
    case types.USER_ROLE_ERROR:
      return {
        ...state,
        userRoleError: action.error,
      };
    case types.USER_INFO_UPDATE:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_INFO_UPDATE_SUCCESSFUL:
      return {
        ...state,
        userUpdated: true,
        user: action.payload,
      };
      console.log(state.user);
    case types.USER_INFO_UPDATE_FAILED:
      return {
        ...state,
        isLoading: false,
        userUpdateError: action.error,
      };
    case types.FECTH_USER_SUCCESSFULLY:
      return {
        ...state,
        user: action.payload,
      };
  }
}

export default userReducer;
