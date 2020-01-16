import * as types from '../actions/appointmentActions';

const initialState = {
  appointments: null,
  error: '',
  isLoading: false,
};

function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.APPOINTMENTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.APPOINTMENTS_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        appointments: action.payload,
      };

    case types.APPOINTMENTS_ERROR:
      return { ...state, error: action.payload };

    case types.CANCEL_APPOINTMENT_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        appointments: state.appointments.map(appointment => {
          if (appointment.id === action.payload.id) {
            appointment.canceled = action.payload;
          }
          return appointment;
        }),
      };

    default:
      return state;
  }
}

export default appointmentsReducer;
