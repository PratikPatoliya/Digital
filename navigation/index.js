
import React from 'react';
import Model from '../components/Model';
import UseNetInfo from '../components/UseNetInfo';
import Routes from './Routes';

const Providers = () => {

let network = UseNetInfo();
  if (network === false) {
    return <Model />
  }

  return <Routes />;
};

export default Providers;
