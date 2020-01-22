import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Landing from '../../Landing';

beforeEach(() => {
  rtl.cleanup();
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

it('renders Navigation', () => {
  const wrapper = rtl.render(<Landing />);
  const faq = wrapper.queryAllByText(/faq/i);
  expect.arrayContaining(faq);

  const about = wrapper.queryAllByText(/about/i);
  expect.arrayContaining(about);
});

it('finds main image', () => {
  const wrapper = rtl.render(<Landing />);
  const womanImage = wrapper.queryByAltText(/woman/i);
  expect(womanImage).toBeInTheDocument();
});

it('loads lower section images', () => {
  const wrapper = rtl.render(<Landing />);
  const triptychImages = wrapper.queryAllByAltText(/feature/i);
  expect.arrayContaining(triptychImages);
});

it('loads upper email input', () => {
  const wrapper = rtl.render(<Landing />);
  const emailInput = wrapper.getByPlaceholderText('Enter your email');
  expect(emailInput).toBeInTheDocument();
});

it('loads lower email input', () => {
  const wrapper = rtl.render(<Landing />);
  const LowerEmailInput = wrapper.getByPlaceholderText(
    'Enter your email address',
  );
  expect(LowerEmailInput).toBeInTheDocument();
});
