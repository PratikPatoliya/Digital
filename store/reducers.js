import { initialState } from './LogininitialState';
import { SET_LOGIN_STATE } from './actionTypes';

export const loginReducer = (state = initialState, action) => {
    debugger
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
      };
    default:
      return state;
  }
};