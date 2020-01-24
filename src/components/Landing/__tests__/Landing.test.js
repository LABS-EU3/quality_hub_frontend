import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Landing from '../../Landing';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Landing />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const wrapper = rtl.render(<Landing />);
  expect(wrapper.firstChild).toMatchSnapshot();
});

it('renders FAQ Link', () => {
  const faq = tools.getByTestId('faq');
  expect(faq).toBeInTheDocument();

  expect(faq.closest('a')).toHaveAttribute('href', '/faq/general');
});

it('renders About link', () => {
  const about = tools.getByTestId('about');
  expect(about).toBeInTheDocument();

  expect(about.closest('a')).toHaveAttribute('href', '/');
});

it('renders Login link', () => {
  const login = tools.getByTestId('login');
  expect(login).toBeInTheDocument();

  expect(login.closest('a')).toHaveAttribute('href', '/login');
});

it('renders Signup link', () => {
  const signup = tools.getByTestId('signup');
  expect(signup).toBeInTheDocument();

  expect(signup.closest('a')).toHaveAttribute('href', '/register');
});

it('finds main image', () => {
  const womanImage = tools.queryByAltText(/woman/i);
  expect(womanImage).toBeInTheDocument();
});

it('loads lower section images', () => {
  const triptychImages = tools.queryAllByAltText(/feature/i);
  expect.arrayContaining(triptychImages);
});

it('loads upper email input', () => {
  const emailInput = tools.getByPlaceholderText('Enter your email');
  expect(emailInput).toBeInTheDocument();
});

it('loads lower email input', () => {
  const LowerEmailInput = tools.getByPlaceholderText(
    'Enter your email address',
  );
  expect(LowerEmailInput).toBeInTheDocument();
});
