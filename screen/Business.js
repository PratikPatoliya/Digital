/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import colors from '../utils/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Business = () => {
  return (
    <View>
      <Header title=" My Business" />
      <View style={{ backgroundColor: colors.black, height: height  }}>
        <View style={{margin:15, flexDirection: 'row',alignSelf:"center" ,backgroundColor:colors.yellow }}>
          <View style={{ width: "24%"  }}>
            <Image source={{ uri: ("https://us.123rf.com/450wm/maudis60/maudis601602/maudis60160200082/51858565-vector-sign-up-arrow-letter-a.jpg?ver=6") }} style={{ width: width * 0.2, height: height * 0.1,borderRadius:10 }} />
          </View>
          <View style={{ width: "68%" }}>
            <Text style={{ color: colors.white }}>Company Name</Text>
            <Text style={{ color: colors.white }}>Company mobile number</Text>
            <Text style={{ color: colors.white }}>No,Street name,Road Name,Area-pincode</Text>
          </View>
          <View style={{ width: "8%",top:5 }}>
            <Text style={{ color: colors.white }}><Icon name='edit' size={22} /></Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({});
