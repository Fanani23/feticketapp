const initialState = {
  user: {
    id: "",
    fullname: "",
    email: "",
    token: "",
  },
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === "CUSTOMER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "CUSTOMER_LOGIN_SUCCESS") {
    return {
      ...state,
      user: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default userReducer;
