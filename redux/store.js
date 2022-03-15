import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducers from './reducer/rootReducers';

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
