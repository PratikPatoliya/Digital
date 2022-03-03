/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Image, StyleSheet, Dimensions, Text, TouchableOpacity, View } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CatagoryImage = (props) => {
    const { data, onPress } = props;
    // console.warn("props",props);
    const renderItem = ({ item }) => {
        return (
            <View style={styles.Grig}>
                <TouchableOpacity onPress={onPress} >
                    <Image source={{ uri: item.img }} style={styles.tinyLogo} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <View style={{ backgroundColor: "black", height: 130 }}>
                <FlatList data={data} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} style={{ height: 100, marginLeft: 12, marginRight: 12, bottom: 0 }} />
            </View>
        </View>
    )
}

export default CatagoryImage;

const styles = StyleSheet.create({
    Grig: {
        borderWidth: 0.5,
        alignItems: "center",
        margin: 5,
        bottom: 5,
    },
    tinyLogo: {
        borderRadius: 5,
        width: width * 0.29,
        height:  120,
    },
});
