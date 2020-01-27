import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import * as rtl from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../Header/Header';

describe('Header', () => {
  it('matches snapshot ', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Header />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('H2 copy displayed', () => {
    const tree = rtl.render(
      <Router>
        <Header />
      </Router>,
    );
    const ctaTitle = tree.getByTestId('cta-title');

    expect(ctaTitle).toBeInTheDocument();
  });

  it('CTA Button link ok', () => {
    const tree = rtl.render(
      <Router>
        <Header />
      </Router>,
    );
    const ctaButton = tree.getByTestId('cta-button');
    expect(ctaButton).toBeInTheDocument();

    expect(ctaButton).toHaveAttribute('href', '/register');
  });
});
