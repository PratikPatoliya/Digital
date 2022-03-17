import BASE_URL from "../../config/baseUrl";
import axios from 'axios';
import { GET_HOME } from "../types/Home.types";
const HomeData = `${BASE_URL}/homepage`;

const setHomeData = homeData => {
  return {
    type: GET_HOME,
    payload: homeData,
  };
};

export const homeapidata = () => {
  return dispatch => {
    return axios.get(HomeData)
      .then((res) => {
        console.log("Home", res.data);
        dispatch(setHomeData(res.data));
      }
      );
  }
}