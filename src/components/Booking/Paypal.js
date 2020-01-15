import React, { useRef, useEffect } from 'react';

const Paypal = props => {
  const {
    description,
    price,
    handlePaypalPayment,
    success,
    error,
  } = props;
  const paypalRef = useRef();

  useEffect(() => {
    handlePaypalPayment(
      description,
      price,
      paypalRef,
      success,
      error,
    );
  }, [description, price, handlePaypalPayment, success, error]);

  return (
    <div>
      <div ref={paypalRef} />
    </div>
  );
};

export default Paypal;
