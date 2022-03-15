import {SET_LOGIN_STATE} from '../types/Login.types';
import axios from 'axios';
import BASE_URL from '../../config/baseUrl';
const LoginUrl = `${BASE_URL}/connect`;

export const login = loginInput => {
  return dispatch => {
    return axios
      .post(LoginUrl, loginInput, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        dispatch(setLoginState(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const setLoginState = loginData => {
  return {
    type: SET_LOGIN_STATE,
    payload: loginData,
  };
};
