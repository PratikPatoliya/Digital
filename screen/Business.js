import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import image from '../utils/image';
import styles from '../styles/Business';

const Business = ({navigation}) => {
  return (
    <View>
      <Header title=" My Business" />
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.firstWidth}>
            <Image source={{uri: image.businessImage}} style={styles.image} />
          </View>
          <View style={styles.secondWidth}>
            <Text style={styles.commonColor}>Company Name</Text>
            <Text style={styles.commonColor}>Company mobile number</Text>
            <Text style={styles.commonColor}>
              No,Street name,Road Name,Area-pincode
            </Text>
          </View>
          <View style={styles.thirdWidth}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditBusiness');
              }}>
              <Text style={styles.commonColor}>
                <Icon name="edit" size={22} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Business;
