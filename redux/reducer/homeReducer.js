import { GET_HOME, GET_HOME_ERROR } from '../types/Home.types';
const initialState = {
  homeData: '',
  HomeError:''
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
        console.log("action.payload",action.payload);
      return {
        ...state,
        homeData: action.payload,
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