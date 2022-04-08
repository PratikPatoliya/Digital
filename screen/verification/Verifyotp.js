import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from '../../styles/Verifyotp';
import image from '../../utils/image';
import { useDispatch, useSelector } from 'react-redux';
import { login, startLoader, stopLoader } from '../../redux/action/Login.action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verify } from '../../redux/action/Verifyotp.action';
import { SET_USER_TOKEN } from '../../redux/types/Verifyotp.type';

const Verify = ({ route, navigation }) => {
  // console.log("route",route.params.number);
  const number = route.params.number;
  const setNumber = route.params.setNumber;
  const dispatch = useDispatch();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();
  const fiveInput = useRef();
  const sixInput = useRef();
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  const [errorMessage, setErrorMessage] = useState(true);
  const [setLoader, setSetLoader] = useState(false);
  // const [userToken, setUserToken] = useState(null);


  let otp1 = Object.values(otp).join('');

  console.log("errorMessageerrorMessageerrorMessage",errorMessage);
  // const variftOtp = useSelector(state => state?.loginReducer?.userData?.data[0]?.password);

  // const varif1 = useSelector(state => state?.verifyotpReducer?.userData?.data[0]?.token);
  // const variftOtplog = useSelector(state => console.log("123",state?.loginReducer?.userData?.data));
  // console.log("varif1varif1varif1varif1varif1", varif1);

  const loader2 = useSelector(state => state.verifyotpReducer.isLoader) || false;
  const errorLogin = useSelector(state => state?.verifyotpReducer?.setUserError)
  console.log("errorLoginerrorLogin",errorLogin);
  const errorLogin2 = useSelector(state => state?.verifyotpReducer)

  useEffect(() => {
    if (loader2) {
      setSetLoader(true);
    } else {
      setSetLoader(false);
    }
  }, [loader2]);
  // const fetchToken = async () => {
  //   let response = await AsyncStorage.getItem('userToken')
  //   // console.log("resssssss", response);
  //   return response
  //   // setUserToken(response)
  // }
  // useEffect(() => {
  //   const value = fetchToken();
  // }, [varif1])
  
  const validationotp = async () => {
    dispatch(verify({ mobile_number: number, password: otp1 }));
    setErrorMessage(true)
    setTimeout(async() => {
      const token = await AsyncStorage.getItem('userToken');
      console.log("datatoken",token);
      if (token) { 
        setNumber('')
        navigation.navigate('AppStack');
      } 
    }, 1000);
  };
  return (
    <>
    
    <View style={styles.view1}>
      <Image source={image.otp} style={styles.img} />
      <Text style={styles.textheader}>Verification Code</Text>
      <Text style={styles.texttitle}>
        Verification code sent {'\n'}      to{' '}
        <Text style={styles.textnumber}>{number}</Text>
      </Text>
      <View style={styles.textinputview}>
        <TextInput
          keyboardType="number-pad"
          ref={firstInput}
          autoFocus={true}
          onChangeText={text => {
            setOtp({ ...otp, 1: text });
            text && secondInput.current.focus();
          }}
          onChange={() => setErrorMessage(false)}
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
          onChange={() => setErrorMessage(false)}
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
          onChange={() => setErrorMessage(false)}
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
          onChange={() => setErrorMessage(false)}
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
          onChange={() => setErrorMessage(false)}
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
          onChange={() => setErrorMessage(false)}
          maxLength={1}
          style={styles.inputContainer6}
        />
      </View>
      {errorMessage && (
        <Text style={{ color: 'red', top: 25 }}>
          {errorLogin}
        </Text>
      )}
      {/* {errorMessage !== '' && (
        <Text style={{ color: 'red', top: 25 }}>{errorMessage}</Text>
      )} */}
      <View
        style={
          errorMessage && errorMessage !== false
            ? styles.buttonContainer
            : styles.buttonContainer1
        }>
        <TouchableOpacity style={styles.tochable} onPress={validationotp}>
          {/* <Text style={styles.tochabletext}>Verify</Text> */}
          {setLoader ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={styles.tochabletext}>Verify</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center', marginTop: 8 }}
          onPress={() => navigation.navigate('login')}>
          <Text style={{ color: 'green', fontSize: 15 }}>Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
</>
  );
};

export default Verify;
