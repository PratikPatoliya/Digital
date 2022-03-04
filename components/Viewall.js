/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/Viewall';
import Header from './Header';

const Viewall = ({ route ,navigation }) => {
    const viewAllData = route.params.itemdata;
    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.Grig}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.img,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.backgroung}>
            <ScrollView>
                <Header title={route.params.headername.header} isBack={() =>  navigation.goBack()} inamel="chevron-back-outline" />
                <View style={styles.viewflate}>
                    <FlatList data={viewAllData} renderItem={renderItem} numColumns={2} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Viewall;

