import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import Dashboard from './components/Dashboard';
import UserDashboard from './views/UserDashboard/UserDashboard';
import Marketplace from './views/Marketplace/Marketplace';
import Landing from './components/Landing';
import InterviewerForm from './components/Forms/InterviewerForm';
import StudentForm from './components/Forms/StudentForm';
import UserTypePage from './components/UserType/UserTypePage';
import MainFaq from './components/FAQ/Main';
import Booking from './components/Booking/Booking';
import Feedback from './views/Feedback/Feedback';
import VideoChat from './components/VideoChat';
import GiveFeedback from './views/Feedback/GiveFeedback';
import 'antd/dist/antd.css';

const globalTheme = createMuiTheme({
  typography: {
    fontFamily: ['Ubuntu', 'Abeezee'].join(','),
  },
});

function App() {
  const routes = (
    <Switch>
      <Route path={'/dashboard'} component={UserDashboard} />
      <Route path={'/marketplace'} component={Marketplace} />
      <Route path={'/appointment'} component={Booking} />
      <Route path={'/feedback'} component={Feedback} />
      <Route path={'/interview'} component={VideoChat} />
      <Route path={'/givefeedback'} component={GiveFeedback} />
      <Redirect to='/dashboard' />
    </Switch>
  );

  if (localStorage.getItem('token')) {
    return (
      <ThemeProvider theme={globalTheme}>
        <Dashboard routes={routes} />
      </ThemeProvider>
    );
  }
  if (localStorage.getItem('tempuser')) {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/userrole' component={UserTypePage} />
        <Route path='/interviewer' component={InterviewerForm} />
        <Route path='/student' component={StudentForm} />
        <Redirect to='/userrole' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/login/' component={LoginForm} />
      <Route path='/register' component={SignUpForm} />
      <Route path='/marketplace' component={Marketplace} />
      <Route path='/faq' component={MainFaq} />
      <Redirect to='/' />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    userHasChosenRole: state.userReducer.userHasChosenRole,
  };
};

export default connect(mapStateToProps)(App);
