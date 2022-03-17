import { GET_BANNER } from '../types/Banner.types';
const initialState = {
  bannerData: '',
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNER:
        // console.log("action.payload",action.payload);
      return {
        ...state,
        bannerData: action.payload,
      };
    default:
      return state;
  }
};