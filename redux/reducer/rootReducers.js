import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';

const rootReducers = combineReducers({
  loginReducer: loginReducer,
});

export default rootReducers;
