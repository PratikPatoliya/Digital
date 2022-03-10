/* eslint-disable prettier/prettier */
import React from 'react';
import Model from '../components/Model';
import UseNetInfo from '../components/UseNetInfo';
import Routes from './Routes';

const Providers = () => {

let network = UseNetInfo();
  // console.log("network",network);
  if (network === false) {
    return <Model />
  }

  return <Routes />;
};

export default Providers;
