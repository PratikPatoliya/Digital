/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, View, Text,Dimensions, ScrollView, FlatList} from 'react-native';
import Header from '../components/Header';
import Eflatlist from '../components/Eflatlist';
import Editior from '../components/Editior';
import Share from 'react-native-share';
import styles from '../styles/Frame';

const { width } = Dimensions.get('window');

const Frame = ({ route , navigation}) => {
    const [imageSource, setImageSource] = useState(null);
    const categoryImage = route.params.img;

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image source={{ uri: item.img }} style={styles.image} />
                {imageSource === null ?
                    <Text> Not Found Img</Text>
                    : <Image source={{ uri: imageSource }} style={styles.insideimage} />
                }
            </View>
        );
    };

    const myCustomerShare = async () => {
        const shareOption = {
            message: 'Hello',
        };
        try {
            const ShareResponse = await Share.open(shareOption);
            console.log(JSON.stringify(ShareResponse));
        }
        catch (error) {
            console.log('Error => ', error);
        }
    };

    return (
        <View style={styles.fview}>
            <Header inamel="chevron-back-outline" title="Edit Frame" isBack={() =>  navigation.goBack()} inamer1="arrow-down-outline" inamer2="arrow-redo-outline" preasename2={myCustomerShare} />
            <ScrollView >
                <View style={styles.topmargin}>
                    <Eflatlist />
                    <View>
                        <View style={styles.flatelistview}>
                            <FlatList data={categoryImage} renderItem={renderItem} horizontal={true} showsHorizontalScrollIndicator={false} />
                        </View>
                        <Editior setImageSource={setImageSource} imageSource={imageSource} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Frame;
