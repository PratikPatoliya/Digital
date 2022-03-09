/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import styles from '../styles/CategoryImage';
const CatagoryImage = props => {
  const {data} = props;
  const renderItem = ({item}) => {
    return (
      <View style={styles.Grig}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={{uri: item.img}} style={styles.tinyLogo} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.item}
      />
    </View>
  );
};

export default CatagoryImage;
