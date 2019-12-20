import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import InterviewerForm from './components/Forms/InterviewerForm';
import StudentForm from './components/Forms/StudentForm';
import UserTypePage from './components/UserType/UserTypePage';

function App() {
  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route path='/login/' component={LoginForm} />
      <Route path='/register' component={SignUpForm} />
      <Route path='/interviewer' component={InterviewerForm} />
      <Route path='/student' component={StudentForm} />
      <Route path='/user/type' component={UserTypePage} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
    </>
  );
}

export default connect(state => state)(App);  
