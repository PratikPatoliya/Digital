/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image} from 'react-native';
import Header2 from '../components/Header2';
import styles from '../styles/ContactUs';
import image from '../utils/image';
import Editform from './Editform';

<<<<<<< HEAD
const Contactus = (props) => {
    return (
        <View>
            <Header2 inamel="chevron-back-outline" title="Contact Us" isBack={() =>  props.navigation.goBack()} />
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <Image source={{ uri: image.contactUs }} style={styles.image} />
                    <Editform />
                </View>
            </View>
=======
const Contactus = props => {
  return (
    <View>
      <Header2
        inamel="chevron-back-outline"
        title="Contact Us"
        isBack={() => props.navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Image source={{uri: image.contactUs}} style={styles.image} />
>>>>>>> 4da4e7dc8042485de8a5ad224a271aeb7397de98
        </View>
      </View>
    </View>
  );
};

export default Contactus;
