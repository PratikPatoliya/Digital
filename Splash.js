/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View ,Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.50;

const bg = require('./utils/img/backgroung.jpg');
const logo = require('./utils/img/logo.png');


const Splash = ({navigation}) => {

    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('login');
        },2000);
    });

  return (
    //source={bg}
    <ImageBackground style={styles.bg}>
        <View style={styles.viewcenter}>
            <Image source={logo} style={styles.img}></Image>
        </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
    bg:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
    },
    viewcenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        width:120,
        height:120,
    },
});