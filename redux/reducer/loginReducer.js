import {SET_LOGIN_STATE} from '../types/Login.types';

const initialState = {};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
