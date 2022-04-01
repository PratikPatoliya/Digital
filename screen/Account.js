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
import axios from 'axios';
import { useSelector } from 'react-redux';

const Account = ({ navigation }) => {
  const [model, setModel] = useState(false);
  const [imageSource, setImageSource] = useState(image.userImage);
  const [userPath, setUserPath] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  console.log("userPath", userPath);
  // const user_Idlog = useSelector(state => console.log("state",(state?.verifyotpReducer?.userData?.data[0]?.userId)));
  useEffect(() => {
    idcall()
  }, [])
  const idcall = async () => {
    const ID = await AsyncStorage.getItem('userId')
    // console.log("ID", ID);
    const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    setMobileNumber(phoneNumber)
    accountUrl = `${BASE_URL}/profile/${ID}`;
    setUserPath(accountUrl)
    console.log("accountUrlaccountUrlaccountUrl", accountUrl);
  }

  // let accountUrl = `${BASE_URL}/profile/${ID}`;
  function selectImage() {
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      compressImageQuality: 0.7,
      cropping: true,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
      avoidEmptySpaceAroundImage: true,
      includeBase64: true,
      mediaType: 'photo',
    }).then(image => {
      // setImageSource(image.path);
      console.log("image.path++++++++++++++++++", image);
      imageUpload(image)
      // Toast.show('Successfully change image');
    });
    setModel(false);
  }
  function selectCamera() {
    ImagePicker.openCamera({
      cropping: true,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      compressImageQuality: 0.7,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
      includeBase64: true,
      mediaType: 'photo',
    }).then(image => {
      // setImageSource(image.path);
      console.log("image.path", image);
      imageUpload(image)
      // Toast.show('Successfully change image');
    });
    setModel(false);
  }

  const imageUpload = async (imagePath) => {

    // var formdata = new FormData();
    // formdata.append("type", 1);
    // formdata.append("image", imagePath);
    // console.log("123", formdata._parts[0][1]);
    // console.log("123", formdata._parts[1][1]);
    // let obg = {
    //   type: formdata._parts[0][1],
    //   image: formdata._parts[1][1]
    // }
    // console.log("+++++obg", obg);
    // console.log("formdataformdataformdata", obg);
    // //     var requestOptions = {
    // //       method: 'POST',
    // //       body: formdata,
    // //       redirect: 'follow'
    // //     };

    // const res = axios.post(userPath, obg)
    // response.JSON()
    //   .then(response => console.log("++++++++++++response", response)
    //   )
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // console.log("resresresresres", res);

    console.log("imagePathimagePath", imagePath);
    var formdata = new FormData();
    formdata.append("type", 1);
    formdata.append("image",imagePath);
    // formdata.append("image", {
    //   uri: imagePath.data,
    //   name: imagePath.modificationDate,
    //   fileName: 'image',
    //   type: imagePath.mime,
    // });
    console.log("formdataformdata", formdata);

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };

    axios.post(userPath, formdata, {
      headers: {
        "Content-Type": "multipart/form-data; boundary=someRandomString",
        "Accept": "application/json"
      }
    }).then((res) => console.log("res", res)).catch((e) => console.log('e', e))

  }

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
      <Modal transparent={true} visible={model}>
        <View style={styles.topContainer}>
          <View style={styles.modelContainer}>
            <Text style={{ fontSize: 17, color: colors.black }}>
              Select File from
            </Text>
            <TouchableOpacity
              onPress={selectImage}
              style={{ backgroundColor: colors.white, justifyContent: 'center' }}>
              <Text style={styles.titleTxt}>Choose Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={selectCamera}
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
      </Modal>

      <View style={{ backgroundColor: colors.black, height, width }}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.navigate('Editprofile', { imageSource: imageSource })}>
            <Text style={styles.titlefont}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <TouchableOpacity onPress={() => setModel(true)}>
              <Image
                source={{ uri: imageSource }}
                style={{ height: 120, width: 120, borderRadius: 100 }}
              />
            </TouchableOpacity>
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
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.descriptionTxt}>
              Designed by Bluesoft Infotech
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Account;
