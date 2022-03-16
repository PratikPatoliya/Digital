import React, { useRef, useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/Verifyotp';
import image from '../../utils/image';
import { useDispatch, useSelector } from 'react-redux';
import { otplogin } from '../../redux/action/Login.action';


const Verify = ({ route, navigation }) => {
  const phonenumber = route.params.num;
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();
  const fiveInput = useRef();
  const sixInput = useRef();
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  const [errorMessage, setErrorMessage] = useState('');
  
  console.log(Object.values(otp).join(""));
  let otp1 = Object.values(otp).join("");

  const dispatch = useDispatch();

  const x = useSelector(data =>
    // console.log('dataaaaaaaaaaa', data.loginReducer.code),
    data && data.loginReducer && data.loginReducer.code
  );

  const number = useSelector(data =>
    data && data.loginReducer && data.loginReducer.data && data.loginReducer.data.length>0 &&data.loginReducer.data[0].mobile_number
  );

  const validationotp = () => {
    console.log("otp",otp1.length);
    if( otp1.length === 0){
      setErrorMessage('Enter OTP')
    }else{
      if( otp1.length === 6  && x === otp1){
        navigation.navigate('AppStack');
      }else{
        setErrorMessage('Enter Valid OTP')
      }
    }
  };
  return (
    <View style={styles.view1}>
      <Image source={image.otp} style={styles.img} />
      <Text style={styles.textheader}>Verification Code</Text>
      <Text style={styles.texttitle}>
        Please enter code sent {'\n'} to{' '}
        <Text style={styles.textnumber}>{number}</Text>
      </Text>
      <View style={styles.textinputview}>
        <TextInput
          keyboardType="number-pad"
          ref={firstInput}
          onChangeText={text => {
            setOtp({ ...otp, 1: text });
            text && secondInput.current.focus();
          }}
          onChange={() => setErrorMessage('')}
          maxLength={1}
          style={styles.inputContainer}
        />
        <TextInput
          keyboardType="number-pad"
          ref={secondInput}
          onChangeText={text => {
            setOtp({ ...otp, 2: text });
            text ? thirdInput.current.focus() : firstInput.current.focus();
          }}
          onChange={() => setErrorMessage('')}
          maxLength={1}
          style={styles.inputContainer2}
        />
        <TextInput
          keyboardType="number-pad"
          ref={thirdInput}
          onChangeText={text => {
            setOtp({ ...otp, 3: text });
            text ? fourInput.current.focus() : secondInput.current.focus();
          }}
          onChange={() => setErrorMessage('')}
          maxLength={1}
          style={styles.inputContainer3}
        />
        <TextInput
          keyboardType="number-pad"
          ref={fourInput}
          onChangeText={text => {
            setOtp({ ...otp, 4: text });
            text ? fiveInput.current.focus() : thirdInput.current.focus();
          }}
          onChange={() => setErrorMessage('')}
          maxLength={1}
          style={styles.inputContainer4}
        />
        <TextInput
          keyboardType="number-pad"
          ref={fiveInput}
          onChangeText={text => {
            setOtp({ ...otp, 5: text });
            text ? sixInput.current.focus() : fourInput.current.focus();
          }}
          onChange={() => setErrorMessage('')}
          maxLength={1}
          style={styles.inputContainer5}
        />
        <TextInput
          keyboardType="number-pad"
          ref={sixInput}
          onChangeText={text => {
            setOtp({ ...otp, 6: text });
            !text && fiveInput.current.focus();
          }}
          onChange={() => setErrorMessage('')}
          maxLength={1}
          style={styles.inputContainer6}
        />
      </View>
      {errorMessage !== '' && <Text style={{ color: 'red', top: 25 }}>{errorMessage}</Text>}
      <View style={errorMessage && errorMessage !== '' ? styles.buttonContainer : styles.buttonContainer1}>
        <TouchableOpacity style={styles.tochable} onPress={validationotp}>
          <Text style={styles.tochabletext}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center', marginTop: 0 }}
          onPress={() => navigation.navigate('login')}>
          <Text style={{ color: 'green', fontSize: 15 }}>Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verify;
