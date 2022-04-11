import React from 'react';
import {
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Viewall';
import Header2 from './Header2';

const Viewall = ({ route, navigation }) => {
  const viewAllData = route.params.itemdata;
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.Grig}
         /*  onPress={(index) =>
            navigation.navigate('Frame', {
              id: item._id,
              img: item.img,
              routeName: route.params.screenName,
              selIndex: index,
            })
          } */>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.img,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.backgroung}>
      <ScrollView>
        <Header2
          title={route.params.headername.header}
          isBack={() => navigation.goBack()}
          inamel="chevron-back-outline"
        />
        <View style={styles.viewflate}>
          <FlatList data={viewAllData} renderItem={renderItem} numColumns={2} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Viewall;
