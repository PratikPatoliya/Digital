import {SET_LOGIN_STATE, SET_USER_ERROR, SET_USER_TOKEN} from '../types/Login.types';

const initialState = {
  userToken: '',
  setUserError:'',
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
      case SET_USER_ERROR:
        return{
          ...state,
          setUserError: action.payload,
        };
    default:
      return state;
  }
};