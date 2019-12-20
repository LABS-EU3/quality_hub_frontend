import { combineReducers } from 'redux';
// import your reducers here
import userReducer from './authentication';

const appReducer = combineReducers({
  // add your reducers here
  userReducer,
});

/* const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
}; */

export default appReducer;
