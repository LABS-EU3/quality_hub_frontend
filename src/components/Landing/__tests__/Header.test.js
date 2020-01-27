import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Header from '../Header/Header';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Header />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const wrapper = rtl.render(<Header />);
  expect(wrapper.firstChild).toMatchSnapshot();
});