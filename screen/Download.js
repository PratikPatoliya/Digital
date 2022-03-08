/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image} from 'react-native';
import Header2 from '../components/Header2';
import image from '../utils/image';
import styles from '../styles/Download';

const Download = () => {
  return (
    <View>
      <Header2 title="My Downloads" />
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Image source={{uri: image.downloadImage}} style={styles.image} />
          <Text style={styles.texttitle}>Image not download</Text>
        </View>
      </View>
    </View>
  );
};

export default Download;
