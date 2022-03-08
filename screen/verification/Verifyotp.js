/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/Verifyotp';
import image from '../../utils/image';

const Verify = ({navigation}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  return (
    <View style={styles.view1}>
      <Image source={image.otp} style={styles.img} />
      <Text style={styles.textheader}>Verification Code</Text>
      <Text style={styles.texttitle}>
        Please enter code sent {'\n'} to{' '}
        <Text style={styles.textnumber}>1234567890</Text>
      </Text>
      <View style={styles.textinputview}>
        <TextInput
          keyboardType="number-pad"
          ref={firstInput}
          onChangeText={text => {
            setOtp({...otp, 1: text});
            text && secondInput.current.focus();
          }}
          maxLength={1}
          style={styles.inputContainer}
        />
        <TextInput
          keyboardType="number-pad"
          ref={secondInput}
          onChangeText={text => {
            setOtp({...otp, 2: text});
            text ? thirdInput.current.focus() : firstInput.current.focus();
          }}
          maxLength={1}
          style={styles.inputContainer2}
        />
        <TextInput
          keyboardType="number-pad"
          ref={thirdInput}
          onChangeText={text => {
            setOtp({...otp, 3: text});
            text ? fourInput.current.focus() : secondInput.current.focus();
          }}
          maxLength={1}
          style={styles.inputContainer3}
        />
        <TextInput
          keyboardType="number-pad"
          ref={fourInput}
          onChangeText={text => {
            setOtp({...otp, 4: text});
            !text && thirdInput.current.focus();
          }}
          maxLength={1}
          style={styles.inputContainer4}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.tochable}
          onPress={() => navigation.navigate('AppStack')}>
          <Text style={styles.tochabletext}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 20}}
          onPress={() => console.warn('otp', otp)}>
          <Text style={{color: '#06a10e', fontWeight: '700'}}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verify;
