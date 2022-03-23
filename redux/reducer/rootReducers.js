import {combineReducers} from 'redux';
import { bannerReducer } from './bannerReducer';
import { greetingReducer } from './greetingReducer';
import { homeReducer } from './homeReducer';
import {loginReducer} from './loginReducer';

const rootReducers = combineReducers({
  loginReducer: loginReducer,
  bannerReducer: bannerReducer,
  homeReducer:homeReducer,
  greetingReducer:greetingReducer,
});

export default rootReducers;
