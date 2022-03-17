import BASE_URL from "../../config/baseUrl";
import axios from 'axios';
import { GET_HOME, GET_HOME_ERROR } from "../types/Home.types";
const HomeData = `${BASE_URL}/homepage`;

const setHomeData = homeData => {
  return {
    type: GET_HOME,
    payload: homeData,
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
    return axios.get(HomeData)
      .then((res) => {
        console.log("Home", res.data);
        dispatch(setHomeData(res.data));
    }).catch((err) => {
        // console.log(err);
        dispatch(setHomeDataError(err.data));
      })
  }
}