/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Lable from '../components/Lable';
import CatagoryImage from '../components/CategoryImage';
import { gimg } from '../utils/GimgData';
import colors from '../utils/colors';


const Greeting = (props) => {
    return (
        <View style={{ backgroundColor: colors.black }}>
            <Header title="Greeting" />
            <ScrollView>
                <View style={{marginBottom:40}}>
                    {
                        gimg && gimg.map((item) => {
                            return (

                                <>
                                    {/* {console.warn("1",item)} */}
                                    <Lable title={item.header} view={item.view} onPress={() => props.navigation.navigate('Viewall', { itemdata: item.image, headername: item })} />
                                    <CatagoryImage data={item.image} onPress={() => props.navigation.navigate('Frame', { id: item.image, img: item.image })} />

                                </>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default Greeting;

const styles = StyleSheet.create({});
