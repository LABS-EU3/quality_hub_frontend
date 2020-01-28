import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import * as rtl from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Footer/Footer';

describe('Footer', () => {
  it('matches snapshot ', () => {
    const tree = renderer
      .create(
        <Router>
          <Footer />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Footer />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Register link ok', () => {
    const tree = rtl.render(
      <Router>
        <Footer />
      </Router>,
    );
    const registerLink = tree.getByTestId('registerLink');
    expect(registerLink).toBeInTheDocument();
    expect(registerLink.closest('a')).toHaveAttribute(
      'href',
      '/register',
    );
  });
});
