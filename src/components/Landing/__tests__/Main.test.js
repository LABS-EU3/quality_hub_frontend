import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Main from '../Main/Main';

describe('Main page', () => {
  it('matches snapshot ', () => {
    const tree = renderer
      .create(
        <Router>
          <Main />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Main />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Main about top ok', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.getByTestId('main-about-top');
    expect(test).toBeInTheDocument();
    expect(test).toHaveClass('main-about-top');
  });

  it('Main h2 text ok', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.queryAllByText('Enhance');
    expect.arrayContaining(test);
  });

  it('DevCoach ok', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const text = tree.queryByText('DevCoach');
    expect(text).toBeInTheDocument();
  });

  it('Main-about-title ok', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.getByTestId('main-about-title');
    expect(test).toBeInTheDocument();
    expect(test).toHaveClass('main-about-title');
  });

  it('Image AboutOne in doc', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.getByTestId('aboutOne');
    expect(test).toBeInTheDocument();
  });

  it('Image AboutTwo in doc', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.getByAltText(/hand/i);
    expect(test).toBeInTheDocument();
  });

  it('Image AboutThree in doc', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.getByTestId('aboutThree');
    expect(test).toBeInTheDocument();
  });

  it('Image PersonOne in doc', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.getByTestId('personOne');
    expect(test).toBeInTheDocument();
  });

  it('Image PersonTwo in doc', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.getByTestId('personTwo');
    expect(test).toBeInTheDocument();
  });

  it('Image PersonThree in doc', () => {
    const tree = rtl.render(
      <Router>
        <Main />
      </Router>,
    );
    const test = tree.getByTestId('personThree');
    expect(test).toBeInTheDocument();
  });
});
