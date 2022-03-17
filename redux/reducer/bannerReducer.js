import { GET_BANNER, GET_BANNER_ERROR } from '../types/Banner.types';
const initialState = {
  bannerData: '',
  bannerDataError:'',
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNER:
        // console.log("action.payload",action.payload);
      return {
        ...state,
        bannerData: action.payload,
      }
    case GET_BANNER_ERROR:
      return{
        ...state,
        bannerDataError:action.payload,
      }
    default:
      return state;
  }
};