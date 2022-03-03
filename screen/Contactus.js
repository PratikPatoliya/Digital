/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Header from '../components/Header';
import colors from '../utils/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Contactus = (props) => {
    return (
        <View>
            <Header inamel="chevron-back-outline" title="Contact Us" isBack={() =>  props.navigation.goBack()} />
            <View style={{ backgroundColor: colors.black, height, width }}>
                <View style={{alignItems:'center',marginTop:40}}>
                    <Image source={{ uri: 'https://www.reson8.ae/assets/images/common/contact-us-banner-image.png' }} style={{height:200,width:300}} />
                </View>
            </View>
        </View>
    );
};

export default Contactus;

const styles = StyleSheet.create({});
