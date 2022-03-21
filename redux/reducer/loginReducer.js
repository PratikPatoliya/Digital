import { SET_LOGIN_STATE, SET_LOADER_START, SET_USER_ERROR, SET_USER_TOKEN, SET_LOADER_STOP } from '../types/Login.types';

const initialState = {
  userToken: '',
  setUserError: '',
  isLoader: false,
  userData:[]
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER_START:
      return {
        ...state,
        isLoader: true
      };
    case SET_LOADER_STOP:
      return {
        ...state,
        isLoader: false
      };
    case SET_LOGIN_STATE:
      return {
        ...state,
        userData:action.payload,
        isLoader: false,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
        isLoader: false,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        setUserError: action.payload,
        isLoader: false,
      };
    default:
    return state
  }
};