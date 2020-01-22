import { combineReducers } from 'redux';
// import your reducers here
import userReducer from './authentication';
import appointmentsReducer from './appointments';
import bookingReducer from './booking';
import notificationsReducer from './notifications';
import faqReducers from './faqReducers';
import feedbackReducer from './feedback';
import marketplaceReducer from './marketplace';
import interviewReducer from './interview';
import chatReducer from './chat';

const appReducer = combineReducers({
  // add your reducers here
  userReducer,
  appointmentsReducer,
  bookingReducer,
  notificationsReducer,
  faqReducers,
  feedbackReducer,
  marketplaceReducer,
  interviewReducer,
  chatReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
