import React from 'react';
import { connect } from 'react-redux';
import BookingStepper from './BookingStepper';
import StyledBooking from './BookingStyles';

const Booking = ({ history }) => {
  return (
    <StyledBooking className='booking-container'>
      <BookingStepper history={history} />
    </StyledBooking>
  );
};

export default connect(state => state)(Booking);
