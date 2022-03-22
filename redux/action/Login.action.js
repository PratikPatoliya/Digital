import { SET_LOGIN_STATE, SET_LOADER_START, SET_USER_ERROR, SET_USER_TOKEN, SET_LOADER_STOP } from '../types/Login.types';
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

export const startLoader = () => {
  return {
    type: SET_LOADER_START,
  }
}
export const stopLoader = () => {
  return {
    type: SET_LOADER_STOP,
  }
}


export const login = (loginInput) => {
  console.log("loginInput",loginInput);
  return dispatch => {
    dispatch(startLoader())
    return axios
    .post(LoginUrl, loginInput, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(async (res) => {
      console.log("res",res);
      dispatch(setLoginState(res.data));
      dispatch(setUserLoginState(res?.data?.data[0]?.token));
      console.log("res?.data?.data[0]?.token",res?.data?.data[0]?.token);
      await AsyncStorage.setItem('userToken', res?.data?.data[0]?.token);
    })
    .catch(err => {
      // console.log(err);
      dispatch(setUserError(err.data));
    });
  };
};
