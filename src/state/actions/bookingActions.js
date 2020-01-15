import axiosWithAuth from '../../utils/axiosWithAuth';

export const STRIPE_PAYMENT_START = 'STRIPE_PAYMENT_START';
export const STRIPE_PAYMENT_ERROR = 'STRIPE_PAYMENT_ERROR';
export const STRIPE_PAYMENT_SUCCESSFUL = 'STRIPE_PAYMENT_SUCCESSFUL';
export const PAYPAL_PAYMENT_ERROR = 'PAYPAL_PAYMENT_ERROR';
export const PAYPAL_PAYMENT_SUCCESSFUL = 'PAYPAL_PAYMENT_SUCCESSFUL';
export const SAVE_DATE = 'SAVE_DATE';
export const SAVE_SELECT = 'SAVE_SELECT';
export const SAVE_COACH = 'SAVE_COACH';

const url = process.env.REACT_APP_BASE_URL;

export const handleStripePayment = (
  token,
  title,
  price,
  success,
  error,
) => async dispatch => {
  dispatch({ type: STRIPE_PAYMENT_START });

  const product = {
    name: title,
    price,
  };

  const response = await axiosWithAuth().post(
    `${url}payment/stripe`,
    {
      token,
      product,
    },
  );
  const { status } = response.data;
  if (status === 'success') {
    success();
    dispatch({ type: STRIPE_PAYMENT_SUCCESSFUL });
  } else {
    error();
    dispatch({ type: STRIPE_PAYMENT_SUCCESSFUL });
  }
};

export const handlePaypalPayment = (
  description,
  price,
  paypalRef,
  success,
  error,
) => async dispatch => {
  window.paypal
    .Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description,
              amount: {
                currency_code: 'USD',
                value: price,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        await actions.order.capture();
        success();
        dispatch({ type: PAYPAL_PAYMENT_SUCCESSFUL });
      },
      onError: err => {
        error();
        dispatch({ type: PAYPAL_PAYMENT_ERROR });
      },
    })
    .render(paypalRef.current);
};

export const saveDate = date => {
  return { type: SAVE_DATE, payload: date };
};

export const saveSelect = event => {
  return { type: SAVE_SELECT, payload: event };
};

export const saveCoach = coach => {
  return { type: SAVE_COACH, payload: coach };
};
