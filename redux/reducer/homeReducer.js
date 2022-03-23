import { GET_HOME, GET_HOME_ERROR, GET_HOME_IMAGE } from '../types/Home.types';
const initialState = {
  homeData: null,
  homeDataImage: null,
  HomeError:''
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
      // console.log("Get_Home", action.payload);
      return {
        ...state,
        homeData: action.payload,
      };
    case GET_HOME_IMAGE:
      // console.log("GET_HOME_IMAGE", action.payload);
      return {
        ...state,
        homeDataImage: action.payload,
      };
      case GET_HOME_ERROR:
          return{
            ...state,
            HomeError:action.payload,
          }
    default:
      return state;
  }
};