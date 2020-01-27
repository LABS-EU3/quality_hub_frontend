import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Landing from '../Landing-2';

describe('Landing page', () => {
  it('matches snapshot ', () => {
    const tree = renderer
      .create(
        <Router>
          <Landing />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Landing />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('found cta container', () => {
    const tree = rtl.render(
      <Router>
        <Landing />
      </Router>,
    );
    const test = tree.getByTestId(/cta-container/i);
    expect(test).toBeInTheDocument();
  });

  it('found main image', () => {
    const tree = rtl.render(
      <Router>
        <Landing />
      </Router>,
    );
    const test = tree.getByTestId(/main/i);
    expect(test).toBeInTheDocument();
  });

  it('found Navigation', () => {
    const tree = rtl.render(
      <Router>
        <Landing />
      </Router>,
    );
    const test = tree.getByTestId(/landing-nav/i);
    expect(test).toBeInTheDocument();
  });
});
