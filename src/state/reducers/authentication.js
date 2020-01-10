import * as types from '../actions/actionTypes';

const initialState = {
  user: null,
  loginError: '',
  signUpError: '',
  isLoading: false,
  isLoggedIn: false,
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
      console.log(action);
      return {
        ...state,
        userHasChosenRole: true,
        userRole: action.role,
      };
    case types.USER_ROLE_ERROR:
      console.log(action);
      return {
        ...state,
        userRoleError: action.error,
      }
  }
}

export default userReducer;
