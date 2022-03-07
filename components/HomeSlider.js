/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import colors from '../utils/colors';
import ImageSlider from 'react-native-image-slider';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const images = [
    'https://placeimg.com/640/640/nature',
    'https://placeimg.com/640/640/people',
    'https://placeimg.com/640/640/animals',
    'https://placeimg.com/640/640/beer',
];

const HomeSlider = () => {
    return (
        <View>
            <ImageSlider
                loopBothSides
                autoPlayWithInterval={2000}
                images={images}
                customSlide={({ index, item, style, width }) => (
                    <View key={index} style={[style, styles.customSlide]}>
                        <Image source={{ uri: item }} style={styles.customImage} />
                    </View>
                )}
            />
        </View>
    );
};

export default HomeSlider;

const styles = StyleSheet.create({
    customImage: {
        height: height * 0.25,
        width: width * 0.92,
        backgroundColor: colors.black,
        alignSelf: 'center',
        borderRadius: 5,
    },
    customSlide: {
        backgroundColor: colors.black,
    },
});