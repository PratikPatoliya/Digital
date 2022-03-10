/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/Verifyotp';
import image from '../../utils/image';

const Verify = ({ route, navigation }) => {
  const phonenumber = route.params.num;
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();
  const fiveInput = useRef();
  const sixInput = useRef();
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  const [validotp, setValidotp] = useState(true);

  const validationotp = () => {
    if (otp[1].length < 1) {
      setValidotp(false);
    } else if (otp[2].length < 1) {
      setValidotp(false);
    } else if (otp[3].length < 1) {
      setValidotp(false);
    } else if (otp[4].length < 1) {
      setValidotp(false);
    } else if (otp[5].length < 1) {
      setValidotp(false);
    } else if (otp[6].length < 1) {
      setValidotp(false);
    } else {
      setValidotp(true);
      navigation.navigate('Profile');
    }
  };
  return (
    <View style={styles.view1}>
      <Image source={image.otp} style={styles.img} />
      <Text style={styles.textheader}>Verification Code</Text>
      <Text style={styles.texttitle}>
        Please enter code sent {'\n'}      to{' '}
        <Text style={styles.textnumber}>{phonenumber}</Text>
      </Text>
      <View style={styles.textinputview}>
        <TextInput
          keyboardType="number-pad"
          ref={firstInput}
          onChangeText={text => {
            setOtp({ ...otp, 1: text });
            text && secondInput.current.focus();
          }}
          onChange={() => setValidotp(true)}
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
          onChange={() => setValidotp(true)}
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
          onChange={() => setValidotp(true)}
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
          onChange={() => setValidotp(true)}
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
          onChange={() => setValidotp(true)}
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
          onChange={() => setValidotp(true)}
          maxLength={1}
          style={styles.inputContainer6}
        />
      </View>
      {
        validotp ? null :
          <Text style={{ color: 'red', top: 25 }}>Enter Otp</Text>
      }
      <View style={validotp ? styles.buttonContainer : styles.buttonContainer1}>
        <TouchableOpacity
          style={styles.tochable}
          onPress={validationotp}
        >
          <Text style={styles.tochabletext}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center', marginTop: 0 }}
          onPress={() => navigation.navigate('login')}>
          <Text style={{ color: "green", fontSize: 15 }} >Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verify;
