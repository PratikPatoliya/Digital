import React, {useEffect, useRef, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {startLoader, stopLoader} from '../../redux/action/Login.action';

const Verify = ({navigation}) => {
  const dispatch = useDispatch();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();
  const fiveInput = useRef();
  const sixInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''});
  const [errorMessage, setErrorMessage] = useState('');
  const [setLoader, setSetLoader] = useState(false);

  let otp1 = Object.values(otp).join('');

  const variftOtp = useSelector(state => state?.loginReducer?.userData?.code);

  const loader2 = useSelector(state => state.loginReducer.isLoader) || false;
  useEffect(() => {
    if (loader2) {
      setSetLoader(true);
    } else {
      setSetLoader(false);
    }
  }, [loader2]);
  const number = useSelector(
    state =>
      state &&
      state.loginReducer &&
      state.loginReducer.userData &&
      state.loginReducer.userData.data &&
      state.loginReducer.userData?.data[0]?.mobile_number,
  );
  const validationotp = () => {
    if (otp1.length === 0) {
      setErrorMessage('Enter OTP');
    } else {
      if (otp1.length === 6 && variftOtp === otp1) {
        dispatch(startLoader());
        setTimeout(() => {
          navigation.navigate('AppStack');
          dispatch(stopLoader());
        }, 1000);
      } else {
        setErrorMessage('Your OTP is 1 2 3 4 5 6');
      }
    }
  };
  return (
    <View style={styles.view1}>
      <Image source={image.otp} style={styles.img} />
      <Text style={styles.textheader}>Verification Code</Text>
      <Text style={styles.texttitle}>
        Verification code sent {'\n'} to{' '}
        <Text style={styles.textnumber}>{number}</Text>
      </Text>
      <View style={styles.textinputview}>
        <TextInput
          keyboardType="number-pad"
          ref={firstInput}
          onChangeText={text => {
            setOtp({...otp, 1: text});
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
            setOtp({...otp, 2: text});
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
            setOtp({...otp, 3: text});
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
            setOtp({...otp, 4: text});
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
            setOtp({...otp, 5: text});
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
            setOtp({...otp, 6: text});
            !text && fiveInput.current.focus();
          }}
          onChange={() => setErrorMessage('')}
          maxLength={1}
          style={styles.inputContainer6}
        />
      </View>
      {errorMessage !== '' && (
        <Text style={{color: 'red', top: 25}}>{errorMessage}</Text>
      )}
      <View
        style={
          errorMessage && errorMessage !== ''
            ? styles.buttonContainer
            : styles.buttonContainer1
        }>
        <TouchableOpacity style={styles.tochable} onPress={validationotp}>
          {setLoader ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={styles.tochabletext}>Verify</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 8}}
          onPress={() => navigation.navigate('login')}>
          <Text style={{color: 'green', fontSize: 15}}>Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verify;
