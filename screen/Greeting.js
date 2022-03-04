/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View } from 'react-native';
import Header2 from '../components/Header2';
import Lable from '../components/Lable';
import CatagoryImage from '../components/CategoryImage';
import { gimg } from '../utils/GimgData';
import colors from '../utils/colors';
import styles from '../styles/Greeting';

const Greeting = (props) => {
    return (
        <View style={{ backgroundColor: colors.black }}>
            <Header2 title="Greetings" />
            <ScrollView>
                <View style={styles.container}>
                    {gimg && gimg.map((item) => {
                            return (
                                <>
                                    <Lable title={item.header} view={item.view} onPress={() => props.navigation.navigate('Viewall', { itemdata: item.image, headername: item })} />
                                    <CatagoryImage data={item.image} onPress={() => props.navigation.navigate('Frame', { id: item.image, img: item.image })} />
                                </>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default Greeting;
