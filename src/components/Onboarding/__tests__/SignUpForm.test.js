import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from 'react-redux';
import renderer from 'react-test-renderer';
import mockStore from 'redux-mock-store';
import SignUpForm from '../SignUpForm';

const store = mockStore({
  startup: { complete: false },
});

it('test', () => {
  const tree = ReactDOM.render(
    <Provider store={store}>
      <SignUpForm />
    </Provider>,
    document.getElementById('root'),
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

// describe('SignUpForm page', () => {
//   it('matches snapshot ', () => {
//     const tree = renderer
//       .create(
//         <Router>
//           <SignUpForm />
//         </Router>,
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });

//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(
//       <Router>
//         <SignUpForm />
//       </Router>,
//       div,
//     );
//     ReactDOM.unmountComponentAtNode(div);
//   });

//   it('Register Card Link ok', () => {
//     const tree = rtl.render(
//       <Router>
//         <SignUpForm />
//       </Router>,
//     );
//     const registerCard = tree.getByTestId('registerCard');
//     expect(registerCard).toBeInTheDocument();
//     expect(registerCard).toHaveAttribute('href', '/');
//   });

//   it('found first name placeholder', () => {
//     const tree = rtl.render(
//       <Router>
//         <SignUpForm />
//       </Router>,
//     );
//     const firstName = tree.getByPlaceholderText('First Name');
//     expect(firstName).toBeInTheDocument();
//   });

// });
