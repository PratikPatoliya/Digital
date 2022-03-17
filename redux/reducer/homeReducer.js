import { GET_HOME } from '../types/Home.types';
const initialState = {
  homeData: '',
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
        console.log("action.payload",action.payload);
      return {
        ...state,
        homeData: action.payload,
      };
    default:
      return state;
  }
};