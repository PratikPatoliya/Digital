import {combineReducers} from 'redux';
import { bannerReducer } from './bannerReducer';
import { BusinessDataReducer } from './BusinessDataReducer';
import { EditProfileReducer } from './EditProfileReducer';
import { greetingReducer } from './greetingReducer';
import { homeReducer } from './homeReducer';
import {loginReducer} from './loginReducer';
import {verifyotpReducer} from './verifyotpReducer';

const rootReducers = combineReducers({
  loginReducer: loginReducer,
  bannerReducer: bannerReducer,
  homeReducer:homeReducer,
  greetingReducer:greetingReducer,
  verifyotpReducer:verifyotpReducer,
  BusinessDataReducer:BusinessDataReducer,
  EditProfileReducer:EditProfileReducer,
});

export default rootReducers;
