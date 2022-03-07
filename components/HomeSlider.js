/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableHighlight } from 'react-native';
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
                    // It's important to put style here because it's got offset inside
                    <View key={index} style={[style, styles.customSlide]}>
                        <Image source={{ uri: item }} style={styles.customImage} />
                    </View>
                )}
            //   customButtons={(position, move) => (
            //     <View style={styles.buttons}>
            //       {images.map((image, index) => {
            //         return (
            //           <TouchableHighlight
            //             key={index}
            //             underlayColor="#ccc"
            //             onPress={() => move(index)}
            //             style={styles.button}
            //           >
            //             <Text style={position === index && styles.buttonSelected }>
            //               {index + 1}
            //             </Text>
            //           </TouchableHighlight>
            //         );
            //       })}
            //     </View>
            //   )}
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