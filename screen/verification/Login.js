import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from '../../styles/Login';
import image from '../../utils/image';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/action/Login.action';

const Login = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [validuser, setValiduser] = useState(true);
  const dispatch = useDispatch();

  const validation =  () => {
     dispatch(login({mobile_number: number}));
     setValiduser(false);
    if (number.length < 10) {
      setValiduser(false);
    } else {
      setValiduser(true);
      navigation.navigate('verify',{number:number,setNumber:setNumber});
    }
  };

  const errorLogin = useSelector(state => state?.loginReducer?.userData?.data?.message)
  // console.log("errorLogin",errorLogin);
  // const errorLoginlog = useSelector(state => console.log("state",state?.loginReducer?.userData?.data?.message))
  const loader = useSelector(state => state.loginReducer.isLoader) || false;
  console.log("loader",loader);
  

  return (
    <>
    {loader ? (
      <View style={{justifyContent:'center'}}>
            <ActivityIndicator size="large" color="" />
      </View>
          ) :
      <View style={styles.topview}>
        <View>
          <Image source={image.mobile} style={styles.imghei_wid} />
        </View>
        <Text style={styles.verifytext}>Verify Your Number</Text>
        <Text style={styles.numbertext}>Please Enter Your Mobile Number</Text>
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
            {errorLogin}
          </Text>
        )}
        <TouchableOpacity style={styles.buttonview} onPress={validation}>
          <Text style={styles.tochabletext}>Send</Text>
          {/* {loader ? (
            <ActivityIndicator size="large" color="" />
          ) : (
            <Text style={styles.tochabletext}>Send</Text>
          )} */}
        </TouchableOpacity>
      </View>
}
    </>
  );
};

export default Login;
