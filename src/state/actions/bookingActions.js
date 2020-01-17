import axiosWithAuth from '../../utils/axiosWithAuth';

export const STRIPE_PAYMENT_START = 'STRIPE_PAYMENT_START';
export const STRIPE_PAYMENT_ERROR = 'STRIPE_PAYMENT_ERROR';
export const STRIPE_PAYMENT_SUCCESSFUL = 'STRIPE_PAYMENT_SUCCESSFUL';
export const PAYPAL_PAYMENT_ERROR = 'PAYPAL_PAYMENT_ERROR';
export const PAYPAL_PAYMENT_SUCCESSFUL = 'PAYPAL_PAYMENT_SUCCESSFUL';
export const SAVE_DATE = 'SAVE_DATE';
export const SAVE_SELECT = 'SAVE_SELECT';
export const SAVE_COACH = 'SAVE_COACH';
export const BOOK_APPOINTMENT_START = 'BOOK_APPOINTMENT_START';
export const BOOK_APPOINTMENT_ERROR = 'BOOK_APPOINTMENT_ERROR';
export const BOOK_APPOINTMENT_SUCCESSFUL =
  'BOOK_APPOINTMENT_SUCCESSFUL';

const url = process.env.REACT_APP_BASE_URL;

export const handleStripePayment = (
  token,
  title,
  price,
  success,
  error,
  bookAppointment,
  coach,
  user,
  date,
  topic_id,
  length_id,
  props,
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
    bookAppointment(coach, user, date, topic_id, length_id, props);
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
  bookAppointment,
  coach,
  user,
  date,
  topic_id,
  length_id,
  props,
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
        bookAppointment(
          coach,
          user,
          date,
          topic_id,
          length_id,
          props,
        );
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

export const bookAppointment = (
  coach,
  student,
  appointment_datetime,
  topic_id,
  length_id,
  props,
) => dispatch => {
  dispatch({ type: BOOK_APPOINTMENT_START });
  const appointment = {
    coach_id: coach.id,
    student_id: student.id,
    topic_id,
    length_id,
    appointment_datetime,
  };

  axiosWithAuth()
    .post(`${url}appointment`, appointment)
    .then(res => {
      setTimeout(() => props.history.push('/dashboard'), 2000);

      const coach_email = {
        email: coach.email,
        text: `Hello ${coach.first_name} ${coach.last_name},
        you have a new appointment for the date: ${appointment_datetime},
        please get in touch with ${student.first_name} ${student.last_name} if you don't can 
        make it at the date. The email adress from your coach is: ${student.email}`,
        subject: 'Quality Hub appointment',
      };

      return axiosWithAuth()
        .post(`${url}appointment/email`, coach_email)
        .then(res => {
          const student_email = {
            email: student.email,
            text: `Hello ${student.first_name} ${student.last_name},
            you have a new appointment for the date: ${appointment_datetime},
            please get in touch with ${coach.first_name} ${coach.last_name} if you don't can 
            make it at the date. The email adress from your coach is: ${coach.email}`,
            subject: 'Quality Hub appointment',
          };

          return axiosWithAuth()
            .post(`${url}appointment/email`, student_email)
            .then(res => {
              dispatch({
                type: BOOK_APPOINTMENT_SUCCESSFUL,
                payload: res.data.appointments,
              });
            })
            .catch(err => {
              dispatch({
                type: BOOK_APPOINTMENT_ERROR,
                payload: err,
              });
            });
        })
        .catch(err => {
          dispatch({ type: BOOK_APPOINTMENT_ERROR, payload: err });
        });
    })
    .catch(err => {
      dispatch({ type: BOOK_APPOINTMENT_ERROR, payload: err });
    });
};
