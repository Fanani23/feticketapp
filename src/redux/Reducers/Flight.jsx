const initialState = {
  flight: [],
  isLoading: false,
  isError: false,
};

const flightReducer = (state = initialState, action) => {
  if (action.type === "GET_FLIGHT_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "GET_FLIGHT_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      flight: action.payload,
    };
  } else {
    return state;
  }
};

export default flightReducer;
