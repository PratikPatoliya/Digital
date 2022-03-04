/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import Header from '../components/Header';
import styles from '../styles/ContactUs';
import image from '../utils/image';

const Contactus = (props) => {
    return (
        <View>
            <Header inamel="chevron-back-outline" title="Contact Us" isBack={() =>  props.navigation.goBack()} />
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <Image source={{ uri: image.contactUs }} style={styles.image} />
                </View>
            </View>
        </View>
    );
};

export default Contactus;
