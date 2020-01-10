import axiosWithAuth from '../../utils/axiosWithAuth';

export const STRIPE_PAYMENT_START = 'STRIPE_PAYMENT_START';
export const STRIPE_PAYMENT_ERROR = 'STRIPE_PAYMENT_ERROR';
export const STRIPE_PAYMENT_SUCCESSFUL = 'STRIPE_PAYMENT_SUCCESSFUL';
export const SAVE_DATE = 'SAVE_DATE';
export const SAVE_SELECT = 'SAVE_SELECT';

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
  } else {
    error();
  }
};

export const saveDate = date => {
  return { type: SAVE_DATE, payload: date };
};

export const saveSelect = event => {
  return { type: SAVE_SELECT, payload: event };
};
