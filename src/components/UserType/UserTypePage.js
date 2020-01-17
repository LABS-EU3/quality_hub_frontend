import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../state/actions/authenticationActions';
import { StyledButton, buttonTheme } from '../Landing';
import StyledUserType from './UserTypeStyles';

const UserTypePage = () => {
  return (
    <StyledUserType>
      <div className='container'>
        <div className='user-type-intro'>
          <h2>
            How Would You Like To Use
            <Link to='/'>
              <span> DevCoach?</span>
            </Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi repellendus quam pariatur enim voluptas,
            obcaecati animi ad, veritatis rem, quod quia soluta
            tempore a velit cupiditate alias? Voluptates, et
            voluptate!
          </p>
        </div>
        <div className='users-container'>
          <div className='user-type-container'>
            <div className='user-description'>
              <h3>As A Coach</h3>
              <ul>
                <li>
                  Set your own <strong>income</strong>
                </li>
                <li>
                  <strong>Coach</strong> beginner developers through
                  the technical interview
                </li>
                <li>
                  Help <strong>grow</strong> this community
                </li>
              </ul>
            </div>
            <div className='user-decision'>
              <Link to='/interviewer'>
                <StyledButton theme={buttonTheme} type='submit'>
                  Join As Coach
                </StyledButton>
              </Link>
            </div>
          </div>
          <div className='user-type-container'>
            <div className='user-description'>
              <h3>As A Student</h3>
              <ul>
                <li>
                  <strong>Master</strong> the technical interview
                </li>
                <li>
                  Feel <strong>confident</strong> in the online
                  interview setting
                </li>
                <li>
                  Land your <strong>dream</strong> job and get dat
                  moneyyssss
                </li>
              </ul>
            </div>
            <div className='user-decision'>
              <Link to='/student'>
                <StyledButton theme={buttonTheme} type='submit'>
                  Join As Student
                </StyledButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StyledUserType>
  );
};

export default connect(state => state, { login })(UserTypePage);
