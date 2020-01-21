import * as types from '../actions/marketplaceActions';

const initialState = {
  coaches: null,
  copyOfCoaches: null,
  isLoading: false,
  error: null,
};

function marketplaceReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COACHES_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_COACHES_ERROR:
      return { ...state, error: action.payload };

    case types.GET_COACHES_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        coaches: action.payload,
        copyOfCoaches: action.payload,
      };

    case types.SEARCH_FOR_KEYWORD:
      return {
        ...state,
        coaches: state.copyOfCoaches.filter(coach => {
          if (
            coach.first_name
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          ) {
            return coach.first_name
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }
          if (
            coach.description
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          ) {
            return coach.description
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }
          if (
            coach.location
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          ) {
            return coach.location
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }
          return coach;
        }),
      };

    case types.SEARCH_PRICE:
      return {
        ...state,
        coaches: state.copyOfCoaches.filter(
          coach => coach.hourly_rate < action.payload,
        ),
      };

    case types.SEARCH_EXPERIENCE:
      const filterExperience = state.copyOfCoaches.filter(
        coach => coach.experience_level === action.payload,
      );
      return {
        ...state,
        coaches: filterExperience,
      };

    default:
      return state;
  }
}

export default marketplaceReducer;
