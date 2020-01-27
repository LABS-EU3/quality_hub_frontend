import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import * as rtl from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation/Navigation';

describe('Navigation', () => {
  it('matches snapshot ', () => {
    const tree = renderer
      .create(
        <Router>
          <Navigation />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Navigation />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Signup link ok', () => {
    const tree = rtl.render(
      <Router>
        <Navigation />
      </Router>,
    );
    const signup = tree.getByTestId('signup');
    expect(signup).toBeInTheDocument();

    expect(signup.closest('a')).toHaveAttribute('href', '/register');
  });

  it('FAQ Link ok', () => {
    const tree = rtl.render(
      <Router>
        <Navigation />
      </Router>,
    );
    const faq = tree.getByTestId('faq');
    expect(faq).toBeInTheDocument();

    expect(faq.closest('a')).toHaveAttribute('href', '/faq/general');
  });

  it('About link ok', () => {
    const tree = rtl.render(
      <Router>
        <Navigation />
      </Router>,
    );
    const about = tree.getByTestId('about');
    expect(about).toBeInTheDocument();

    expect(about.closest('a')).toHaveAttribute('href', '/about');
  });

  it('Login link ok', () => {
    const tree = rtl.render(
      <Router>
        <Navigation />
      </Router>,
    );
    const login = tree.getByTestId('login');
    expect(login).toBeInTheDocument();

    expect(login.closest('a')).toHaveAttribute('href', '/login');
  });
});
