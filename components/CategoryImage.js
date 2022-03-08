/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import styles from '../styles/CategoryImage';
const CatagoryImage = props => {
  console.warn(props);
  const {data, onPress} = props;
  const renderItem = ({item}) => {
    console.log("props",props.data.id);
    return (
      <View style={styles.Grig}>
        <TouchableOpacity onPress={onPress}>
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
