export const USER_LOADING = "USER_LOADING";
export const USER_FAIL = "USER_FAIL";
export const USER_SUCCESS = "USER_SUCCESS";
export const OTHER_SUCCESS = "OTHER_SUCCESS";
export const TEL_SUCCESS = "TEL_SUCCESS";

export interface Auth {
  loading?: boolean;
  username?: string;
  otherdetails?: OtherDetails;
  tel?: UserTel;
}

export interface UserDetails {
  username: string;
}

export interface UserTel {
  tel: Number;
}

export interface OtherDetails {
  city: string;
  age: Number;
}

export interface UserLoading {
  type: typeof USER_LOADING;
}

export interface UserFail {
  type: typeof USER_FAIL;
}

export interface OtherSuccess {
  type: typeof OTHER_SUCCESS;
  payload: OtherDetails;
}

export interface UserSuccess {
  type: typeof USER_SUCCESS;
  payload: UserDetails;
}

export interface TelSuccess {
  type: typeof TEL_SUCCESS;
  payload: UserTel;
}

export type UserDispatchTypes =
  | UserLoading
  | UserFail
  | UserSuccess
  | TelSuccess
  | OtherSuccess;


export interface ITable {
  id?: number,
  donation?: string,
  campaign?: string, date_time?: string, status?: string, link?: string
  children?: JSX.Element | JSX.Element[];
}