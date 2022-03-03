/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

const Lable = (props) => {
    const { title, view, onPress } = props;
    // console.warn("Lableprops", props);
    return (
        <View>
            <View style={{ flex: 1, flexDirection: 'row', margin: 6, marginLeft: 10 }}>
                <Text style={{ flex: 1, color: colors.white, fontWeight: "bold",marginLeft:10 }}>{title}</Text>
                {/* <Text style={{ color: colors.white }}>{view}</Text> */}
                <TouchableOpacity onPress={onPress}>
                    <Text style={{ color: '#c4bfbe', fontWeight: "100", fontSize: 12 ,marginRight:10}}>{view}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Lable;

const styles = StyleSheet.create({});
