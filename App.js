/* eslint-disable prettier/prettier */
import React from 'react';
import Providers from './navigation';
import {Provider} from 'react-redux';
import store from './store/reducers/store';
const App = () => {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
};

export default App;
