import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import Dashboard from './components/Dashboard';
import UserDashboard from './views/UserDashboard/UserDashboard';
import Marketplace from './views/Marketplace/Marketplace';
import Landing from './components/Landing/Landing-2';
import InterviewerForm from './components/Forms/InterviewerForm';
import StudentForm from './components/Forms/StudentForm';
import UserTypePage from './components/UserType/UserTypePage';
import MainFaq from './components/FAQ/Main';
import LandingFaq from './components/FAQ/LandingFaq';
import Booking from './components/Booking/Booking';
import Feedback from './views/Feedback/Feedback';
import VideoChat from './components/Video/VideoChat';
import Chat from './components/Chat/ChatScreen';
import StartChat from './components/Chat/Chat';
import Settings from './views/Settings/Settings';
import GiveFeedback from './views/Feedback/GiveFeedback';

const globalTheme = createMuiTheme({
  typography: {
    fontFamily: ['Ubuntu', 'Abeezee'].join(','),
  },
});

function App(props) {
  const routes = (
    <Switch>
      <Route path={'/dashboard'} component={UserDashboard} />
      {props.user && props.user.role_id === 1 ? (
        <Route path={'/marketplace'} component={Marketplace} />
      ) : null}
      <Route path={'/appointment'} component={Booking} />
      <Route path={'/feedback'} component={Feedback} />
      <Route path={'/givefeedback'} component={GiveFeedback} />
      <Route path={'/interview'} component={VideoChat} />
      <Route path={'/Settings'} component={Settings} />
      <Route path={'/FAQ'} component={MainFaq} />
      {props.user && props.user.role_id === 1 ? (
        <Route path={'/start_chat'} component={StartChat} />
      ) : null}
      <Route path={'/chat'} component={Chat} />
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
      <Route path='/faq' component={LandingFaq} />
      <Redirect to='/' />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(App);
