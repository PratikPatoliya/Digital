import React, {useState} from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/Login';
import image from '../../utils/image';

const Login = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [validuser, setValiduser] = useState(true);

  const validation = () => {
    if (number.length < 10) {
      setValiduser(false);
    } else {
      setValiduser(true);
      navigation.navigate('verify', {num: number});
    }
  };

  return (
    <View style={styles.topview}>
      <View>
        <Image source={image.mobile} style={styles.imghei_wid} />
      </View>
      <Text style={styles.verifytext}>Verify Your Number</Text>
      <Text style={styles.numbertext}>
        Please enter your country & {'\n'} your phone number
      </Text>
      <View style={styles.inputview}>
        <Text style={styles.viewtext}>+91</Text>
        <View style={styles.textinput}>
          <TextInput
            dataDetectorTypes={'phoneNumber'}
            maxLength={10}
            keyboardType={'numeric'}
            style={styles.textbox}
            onChangeText={newnumber => setNumber(newnumber)}
            onChange={() => setValiduser(true)}
            defaultValue={number}
          />
        </View>
      </View>
      {validuser ? null : (
        <Text style={{left: 25, top: 40, color: 'red'}}>
          *Enter your valid 10 digit number
        </Text>
      )}
      <TouchableOpacity style={styles.buttonview} onPress={validation}>
        <Text style={styles.tochabletext}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
