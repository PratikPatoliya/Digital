import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import image from './utils/image';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
     _checkAuth();
    }, 2000);
  });

  _checkAuth = async () => {
    const user = await AsyncStorage.getItem('userToken');
    if (!user) {
      navigation.navigate('login');
    } else {
      navigation.navigate('AppStack');
    }
  };

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
  bg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  viewcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 120,
    height: 120,
  },
});