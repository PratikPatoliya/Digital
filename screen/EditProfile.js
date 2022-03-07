/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Dimensions, TextInput, Text, Platform } from 'react-native';
import colors from '../utils/colors';
import Header2 from '../components/Header2';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EditProfile = ({ navigation }) => {
  const [model, setModel] = useState(false);
  const [imageSource, setImageSource] = useState('https://www.clipartmax.com/png/middle/349-3496330_download-person-icon-orange-clipart-computer-icons-user-icon-orange-png.png');
  return (
    <View style={{ backgroundColor: colors.black, height }}>
      <Header2 inamel="chevron-back-outline" title="Edit Profile" isBack={() => navigation.goBack()} rightname="Save" />
      <View style={{ alignItems: 'center', marginTop: height * 0.25 }}>
        <TouchableOpacity onPress={() => setModel(true)}>
          <Image source={{ uri: imageSource }} style={{ height: 120, width: 120, borderRadius: 100 }} />
        </TouchableOpacity>
        <View style={{ top: 20 }}>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>  Enter Your Name  </Text>
            <TextInput style={{ color: colors.white, width: width * 0.80, height : Platform.OS === 'ios' ? 45 : 45, borderRadius: 5, textAlign: 'center' ,fontSize:16 }} />
          </View>
        </View>
      </View>

    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  fieldSet: {
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#fff',
  },
  legend: {
    position:'absolute',
    fontSize:11,
    top: -10,
    alignSelf:'center',
    fontWeight: '500',
    backgroundColor: 'black',
    color:'#fff',
  },
});
