/* eslint-disable prettier/prettier */
import React from 'react';
import Providers from './navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import rootReducer from './store/reducers/rootReducer';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(promise, thunk, logger)),
// );

const App = () => {
  return (
    // <Provider store={store}>
      <Providers />
    // </Provider> 
  );
};

export default App;
