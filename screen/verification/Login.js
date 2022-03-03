/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Text, TextInput, View, Dimensions, Image  } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const mobile = require('../../utils/img/mobile.png');

const Login = ({navigation}) => {
    return (
        <View style={{ paddingTop: 70, paddingLeft:20,paddingRight:20,backgroundColor: '#fff', width, height, alignItems: 'center' ,justifyContent:'center' }}>
            <View style={{}}>
                <Image source={mobile} style={{ width: 200, height: 160 }} />
            </View>
            <Text style={{ fontSize: 25, fontWeight: '700', marginTop: height / 15 ,color:'#4e6dcc' }}>Verify Your Number</Text>
            <Text style={{ fontSize: 15, fontWeight: '100', marginTop: 5 }}>Please enter your country & {'\n'}      your phone number</Text>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: height / 15  }}>
                <Text style={{ flex: 0.2, fontSize: 15, borderRadius:5,borderWidth:0.5,alignItems:'center',marginLeft:17,paddingTop:10,height:40,paddingLeft:15 ,backgroundColor:'#c9f2cb' ,marginRight:10 }}>+91</Text>
                <TextInput dataDetectorTypes={'phoneNumber'} maxLength={10} keyboardType={'numeric'} backgroundColor="#c9f2cb" style={{ flex: 1 ,borderWidth: 0.5, borderRadius: 4, marginRight: 20,height:40}} />
            </View>
            <View style={{marginBottom:height / 3,width:width / 1.24,marginTop:height / 12}}>
                <Button title="Send" style={{borderRadius:10}} color={'#06a10e'} onPress={() => navigation.navigate('verify')}  />
            </View>
        </View>
    );
};

export default Login;
