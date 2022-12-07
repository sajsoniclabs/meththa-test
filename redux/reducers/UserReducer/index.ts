import {
  Auth,
  OTHER_SUCCESS,
  TEL_SUCCESS,
  UserDispatchTypes,
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
} from "../../types/UserActionTypes";

const initialState: Auth = {
  loading: false,
  username: "kamal-1",
  tel: { tel: 0 },
  otherdetails: { city: "city-1", age: 0 },
};

const userReducer = (
  state: Auth = initialState,
  action: UserDispatchTypes
): Auth => {
  switch (action.type) {
    case USER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
      };
    case TEL_SUCCESS:
      return {
        ...state,
        loading: false,
        tel: action.payload,
      };
    case OTHER_SUCCESS:
      return {
        ...state,
        loading: false,
        otherdetails: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
