/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import image from './utils/image';

const Splash = ({navigation}) => {
    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('login');
        },2000);
    });

  return (
    <ImageBackground style={styles.bg}>
        <View style={styles.viewcenter}>
            <Image source={image.logo} style={styles.img} />
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
