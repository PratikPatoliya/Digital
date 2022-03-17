import {combineReducers} from 'redux';
import { bannerReducer } from './bannerReducer';
import {loginReducer} from './loginReducer';

const rootReducers = combineReducers({
  loginReducer: loginReducer,
  bannerReducer: bannerReducer
});

export default rootReducers;
