import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Provider from 'react-redux';
import mockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../LoginForm';

configure({ adapter: new Adapter() });

// let tools;

// beforeEach(() => {
//   rtl.cleanup();
//   tools = rtl.render(<LoginForm />);
// });

const store = mockStore({
  startup: { complete: false },
});

// describe('LoginForm Component', () => {
//   it('should render without throwing an error', () => {
//     expect(
//       shallow(
//         <Provider store={store}>
//           <FormikLoginForm />
//         </Provider>,
//       ).exists(<h1>Welcome Back!</h1>),
//     ).toBe(true);
//   });
// });

describe('LoginForm', () => {
  const setUpFn = props => {
    return mount(
      <Provider store={store}>
        <FormikLoginForm />
      </Provider>,
    );
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setUpFn();
  });

  it('LoginForm', () => {
    const test = wrapper.getByPlaceholderText('email');
    // const test = wrapper.querySelector('input[name="email"]');
    expect(test).toBeInTheDocument();
  });

  it('renders welcome message', () => {
    const welcome = wrapper.getByText('Welcome');
    // expect(wrapper.contains(welcome)).to.equal(true);
    expect(welcome).toBeInTheDocument();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm />, div);
});
