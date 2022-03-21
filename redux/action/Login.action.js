import {
  SET_LOGIN_STATE,
  SET_LOGIN_STATE_START,
  SET_USER_ERROR,
  SET_USER_TOKEN,
} from '../types/Login.types';
import axios from 'axios';
import BASE_URL from '../../config/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const setUserError = userError => {
  return {
    type: SET_USER_ERROR,
    payload: userError,
  };
};

const pendingloginError = () => {
  return {
    type: SET_LOGIN_STATE_START,
  };
};

export const login = loginInput => {
  return dispatch => {
    dispatch(pendingloginError());
    return axios
      .post(LoginUrl, loginInput, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(async res => {
        dispatch(setLoginState(res.data));
        dispatch(setUserLoginState(res?.data?.data[0]?.token));
        await AsyncStorage.setItem('userToken', res?.data?.data[0]?.token);
      })
      .catch(err => {
        // console.log(err);
        dispatch(setUserError(err.data));
      });
  };
};
