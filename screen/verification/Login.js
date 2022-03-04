/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TextInput, View, Image,TouchableOpacity } from 'react-native';
import styles from '../../styles/Login';
import image from '../../utils/image';


const Login = ({ navigation }) => {
    return (
        <View style={styles.topview}>
            <View>
                <Image source={image.mobile} style={styles.imghei_wid} />
            </View>
            <Text style={styles.verifytext}>Verify Your Number</Text>
            <Text style={styles.numbertext}>Please enter your country & {'\n'}      your phone number</Text>
            <View style={styles.inputview}>
                <Text style={styles.viewtext}>+91</Text>
                <TextInput dataDetectorTypes={'phoneNumber'} maxLength={10} keyboardType={'numeric'} backgroundColor="#c9f2cb" style={styles.textinput} />
            </View>
            {/* <View style={styles.buttonview}> */}
                {/* <Button title="Send" style={{ borderRadius: 10 }} color={'#06a10e'} text={'#06a10e'} onPress={() => navigation.navigate('verify')} /> */}
                <TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate('verify')}>
                    <Text style={styles.tochabletext} >Send</Text>
                </TouchableOpacity>
            {/* </View> */}
        </View>
    );
};

export default Login;
