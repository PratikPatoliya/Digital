import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import colors from '../utils/colors';
import ImagePicker from 'react-native-image-crop-picker';
import image from '../utils/image';
import Share from 'react-native-share';
import AccountModule from '../components/AccountModule';
import styles from '../styles/Account';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import BASE_URL from '../config/baseUrl';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { setUserData, setVerifyState } from '../redux/action/Verifyotp.action';

const Account = ({ navigation }) => {
  const [model, setModel] = useState(false);
  const [imageSource, setImageSource] = useState(image.userImage);
  const [userPath, setUserPath] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const dispatch = useDispatch()
  const userData = useSelector(state => state?.verifyotpReducer?.userData);
  // console.log("userData",userData)
  // useEffect(() => {
  //   if (userData?.displayImage) {
  //     setImageSource(userData.displayImage)
  //   } else {
  //     setImageSource(image.userImage)
  //   }
  // }, [userData])
  useEffect(() => {
    idcall()
  }, [])

  const idcall = async () => {
    const ID = await AsyncStorage.getItem('userId')
    //  console.log("IDconsole.logconsole.logconsole.logconsole.log", ID);
    const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    setMobileNumber(phoneNumber)
    accountUrl = `${BASE_URL}/profile/${ID}`;
    //  console.log("accountUrlaccountUrlaccountUrlaccountUrl", accountUrl);
    setUserPath(accountUrl)
  }


  // const options = { mediaType: 'photo', quality: 1, includeBase64: false };
  // const selectImage = async () => {
  //   const result = await launchImageLibrary(options);
  //   console.log('result: ', result);
  //   imageUpload(result)
  // }

  // const selectCamera = async () => {
  //   const result = await launchCamera(options);
  //   console.log('result: ', result);
  //   imageUpload(result)
  // }

  // const imageUpload = async (imagePath) => {
  //   console.log("imagePath", imagePath)
  //   const formData = new FormData();
  //   formData.append('type', 1);
  //   formData.append('image', {
  //     uri: imagePath.assets[0].uri,
  //     type: imagePath.assets[0].type,
  //     name: imagePath.assets[0].fileName,
  //   });
  //   try {
  //     const res = await fetch(userPath, {
  //       method: 'POST',
  //       body: formData,
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     const resJson = await res.json();
  //     if (resJson) {

  //       console.log('api res: ', resJson);
  //       setImageSource(resJson.image);
  //       const userDataObject = { ...userData, displayImage: resJson.image }
  //       AsyncStorage.setItem('userData', JSON.stringify(userDataObject));
  //       console.log("userDataObject", userDataObject);
  //       console.log("userDataObject", typeof(userDataObject));
  //       dispatch(setVerifyState(userDataObject))
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setModel(false);

  // }


  const myCustomerShare = async () => {
    const shareOption = {
      message: `Hey! Customer Welcome to Digital App`,
    };
    try {
      const ShareResponse = await Share.open(shareOption);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  const logout = async () => {
    AsyncStorage.clear();
    navigation.navigate('login')
  }

  return (
    <View>
      {/* <Modal transparent={true} visible={model}>
        <View style={styles.topContainer}>
          <View style={styles.modelContainer}>
            <Text style={{ fontSize: 17, color: colors.black }}>
              Select File from
            </Text>
            <TouchableOpacity
              onPress={async () => await selectImage()}
              style={{ backgroundColor: colors.white, justifyContent: 'center' }}>
              <Text style={styles.titleTxt}>Choose Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => await selectCamera()}
              style={{ backgroundColor: colors.white, justifyContent: 'center' }}>
              <Text style={styles.titleTxt}>Capture Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModel(!model)}
              style={{ backgroundColor: colors.white, justifyContent: 'center' }}>
              <Text style={styles.titleTxt}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}

      <View style={{ backgroundColor: colors.black, height, width }}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.navigate('Editprofile', { imageSource: imageSource })}>
            <Text style={styles.titlefont}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Image
              source={{ uri: imageSource }}
              style={{ height: 120, width: 120, borderRadius: 100 }}
            />
            <Text style={{ color: colors.white, fontSize: 25, marginTop: 5 }}>
              User Name
            </Text>
            <Text style={{ color: colors.white, fontSize: 15, marginTop: 0 }}>
              {mobileNumber}
            </Text>
          </View>
          <View style={{ margin: 10, marginTop: 30 }}>
            <AccountModule
              title="Terms & Conditions"
              iconName="notebook-outline"
              onClick={() => navigation.navigate('Termsconditions')}
            />
            <AccountModule
              title="Privacy Policy"
              iconName="lock"
              onClick={() => navigation.navigate('Privatepolicy')}
            />
            <AccountModule
              title="Contact US"
              iconName="cellphone-message"
              onClick={() => navigation.navigate('ContactUs')}
            />
            <AccountModule
              title="Share"
              iconName="share-all"
              onClick={myCustomerShare}
            />
            <AccountModule
              title="Logout"
              iconName="logout"
              onClick={logout}
            />
          </View>
          <View style={styles.descriptionTxtview}>
            <TouchableOpacity onPress={() => navigation.navigate('Demo')}>
              <Text style={styles.descriptionTxt}>
                Designed by Bluesoft Infotech
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Account;
