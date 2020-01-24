import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import App from '../App';

// let tools;

// beforeEach(() => {
//   rtl.cleanup();
//   tools = rtl.render(<App />);
// });

// it('renders', () => {
//   const wrapper = rtl.render(<App />);
//   console.log(wrapper.debug());
// });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('confirms userDashboard link', () => {
//   const wrapper = rtl.render( <App />);
//   const dashboard = wrapper.getByTestId('dashboard');
//   expect(dashboard.closest('a')).toBeInTheDocument();

//   expect(dashboard).toHaveAttribute('href', '/dashboard');
// });

// it('renders a span with the text Hello World', () => {
//   const wrapper = rtl.render( <App /> ); 
//   // console.log(wrapper.debug());
//   const element = wrapper.queryByTestId(/dashboard/i);
//   expect(element).toBeInTheDocument();
// });
