import BASE_URL from "../../config/baseUrl";
import axios from 'axios';
import { GET_BANNER } from "../types/Banner.types";
const HomeSlider = `${BASE_URL}/banner`;

const setBannerSlider = bannerData => {
    return {
      type: GET_BANNER,
      payload: bannerData,
    };
  };

export const bannerslider = () => {
    return dispatch => {
      return axios.get(HomeSlider)
        .then((res) => {
          console.log("res", res);
          dispatch(setBannerSlider(res.data));
        }
        );
    }
  }