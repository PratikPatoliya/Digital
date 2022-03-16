import {SET_LOGIN_STATE, SET_OTP_STATE} from '../types/Login.types';

const initialState = {
  userToken: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    default:
      return state;
  }
};