import { SET_LOGIN_STATE, SET_USER_TOKEN } from '../types/Login.types';
import axios from 'axios';
import BASE_URL from '../../config/baseUrl';
const LoginUrl = `${BASE_URL}/connect`;


const setLoginState = loginData => {
  return {
    type: SET_LOGIN_STATE,
    payload: loginData,
  };
};

const setUserLoginState = userToken => {
  return {
    type: SET_USER_TOKEN,
    payload: userToken,
  };
};

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
        dispatch(setUserLoginState(res?.data?.data[0]?.token));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
