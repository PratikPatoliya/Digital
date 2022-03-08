/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles/Lable';

const Lable = props => {
  const {title, view, onPress} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.viewtxt}>{view}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lable;
