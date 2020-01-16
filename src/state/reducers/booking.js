import * as types from '../actions/bookingActions';

const initialState = {
  coach: null,
  date: null,
  select: {},
  error: '',
  isLoading: false,
};

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case types.STRIPE_PAYMENT_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.STRIPE_PAYMENT_ERROR:
      return { ...state, error: action.payload };

    case types.STRIPE_PAYMENT_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
      };

    case types.SAVE_DATE:
      return {
        ...state,
        date: action.payload.toString(),
      };

    case types.SAVE_SELECT:
      const copyOfSelect = { ...state.select };

      copyOfSelect[action.payload.target.name] =
        action.payload.target.value;
      return {
        ...state,
        select: copyOfSelect,
      };

    case types.SAVE_COACH:
      return {
        ...state,
        coach: action.payload,
      };

    default:
      return state;
  }
}

export default bookingReducer;
