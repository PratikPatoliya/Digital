import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from "./reducers";

const rootReducers = combineReducers({
    loginReducer:loginReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));