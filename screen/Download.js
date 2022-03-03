/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Header from '../components/Header';
import colors from '../utils/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Download = () => {
    return (
        <View>
            <Header title='My Downloads' />
            <View style={{ backgroundColor: colors.black, height: height, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{marginBottom:100}}>
                    <Image source={{ uri: ("https://cdn2.iconfinder.com/data/icons/robot-character-emoji-sticker-big-set/100/Robot_sticer_color_set-31-512.png") }} style={{ height: 200, width: 150 }} />
                    <Text style={{ color: colors.white, top: -20 }}>  Images not Downloads</Text>
                </View>
            </View>
        </View>
    );
};

export default Download;

const styles = StyleSheet.create({});
