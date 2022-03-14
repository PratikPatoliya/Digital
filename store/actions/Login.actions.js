import ApiService from '../../services/ApiService';
import {LOGIN} from '../types/Login.types';

const succesLogin = payload => {
  return {
    type: LOGIN,
    payload,
  };
};

export const actionLogin = item => {
  return async dispatch => {
    try {
      await ApiService.MobileNumber(item).then(res => {
        if (res.status === 200) {
          dispatch(succesLogin(res.data));
        } else {
        }
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
};
