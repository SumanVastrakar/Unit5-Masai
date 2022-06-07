import { userActions } from "./action";

const initState = {
  loading: false,
  userDetails: [],
  error: false  
};

export const userDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case userActions.USER_DETAILS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case userActions.USER_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        userDetails: action.payload
      };
    }
    case userActions.USER_DETAILS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
   
    default:
      return state;
  }
};
