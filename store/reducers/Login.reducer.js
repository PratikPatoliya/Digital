import {LOGIN, LOGIN_ERROR} from '../types/Login.types';
const statusList = {
  idle: 'idle',
  success: 'success',
  error: 'error',
};

const initialState = {
  response: {
    message: '',
    user: {},
  },
  params: {},
  status: statusList.idle,
};

export default function Reducer(
  state = initialState,
  {type, payload} = action,
) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        response: {
          ...state.response,
          message: payload.message,
          user: payload.user,
        },
        status: statusList.success,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        response: {
          ...state.response,
          response: {
            message: '',
            user: {},
          },
        },
        status: statusList.error,
      };

    default:
      return state;
  }
}
