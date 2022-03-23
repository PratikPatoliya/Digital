import BASE_URL from '../../config/baseUrl';
import axios from 'axios';
import { GET_HOME, GET_HOME_ERROR, GET_HOME_IMAGE } from "../types/Home.types";
const HomeData = `${BASE_URL}/homedata`;
const HomeDataimage = `${BASE_URL}/homedata/image`;

const setHomeData = homeData => {
  return {
    type: GET_HOME,
    payload: homeData,
  };
};
const setHomeDataImage = homeDataImage => {
  return {
    type: GET_HOME_IMAGE,
    payload: homeDataImage,
  };
};
const setHomeDataError = HomeError => {
  return {
    type: GET_HOME_ERROR,
    payload: HomeError,
  };
};

export const homeapidata = () => {
  return dispatch => {
    return axios
      .get(HomeData)
      .then(res => {
        // console.log("response", res)
        dispatch(setHomeData(res.data));
      })
      .catch(err => {
        dispatch(setHomeDataError(err.data));
      });
  };
};
export const homeapidataimg = () => {
  return dispatch => {
    return axios
      .get(HomeDataimage)
      .then(res => {
        // console.log("response", res)
        dispatch(setHomeDataImage(res.data));
      })
      .catch(err => {
        dispatch(setHomeDataError(err.data));
      });
  };
};
