import {combineReducers} from 'redux';
import { bannerReducer } from './bannerReducer';
import { homeReducer } from './homeReducer';
import {loginReducer} from './loginReducer';

const rootReducers = combineReducers({
  loginReducer: loginReducer,
  bannerReducer: bannerReducer,
  homeReducer:homeReducer,
});

export default rootReducers;
