import { Dispatch } from "redux";
import axios from "axios";
import {
  OtherDetails,
  OTHER_SUCCESS,
  TEL_SUCCESS,
  UserDispatchTypes,
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
} from "../../types/UserActionTypes";

export const GetTelData =
  () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      dispatch({
        type: TEL_SUCCESS,
        payload: { tel: 6 },
      });
    } catch (e) {
      dispatch({
        type: USER_FAIL,
      });
    }
  };

export const GetOtherData =
  () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      const response: OtherDetails = { city: "colombo", age: 20 };

      dispatch({
        type: OTHER_SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: USER_FAIL,
      });
    }
  };

export const GetUserData =
  (name: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      dispatch({
        type: USER_SUCCESS,
        payload: { username: name },
      });
    } catch (e) {
      dispatch({
        type: USER_FAIL,
      });
    }
  };
