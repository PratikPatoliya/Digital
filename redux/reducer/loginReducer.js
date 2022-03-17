import {SET_LOGIN_STATE, SET_LOGIN_STATE_START, SET_USER_ERROR, SET_USER_TOKEN} from '../types/Login.types';

const initialState = {
  userToken: '',
  setUserError:'',
  isLoader:false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE_START:
      return{
        isLoader:true
      };
      case SET_LOGIN_STATE:
        return {
          ...state,
          ...action.payload,
          isLoader:false,
        };
        case SET_USER_TOKEN:
          return {
            ...state,
            userToken: action.payload,
            isLoader:false,
          };
          case SET_USER_ERROR:
            return{
              ...state,
              setUserError: action.payload,
              isLoader:false,
        };
    default:
      return state;
  }
};