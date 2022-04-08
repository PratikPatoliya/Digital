import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, TextInput, Text, Modal } from 'react-native';
import styles from '../styles/EditProfile';
import Header2 from '../components/Header2';
import image from '../utils/image';
import colors from '../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from '../config/baseUrl';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { setVerifyState } from '../redux/action/Verifyotp.action';

const EditProfile = ({ route, navigation }) => {
  // const imageSource = route.params.imageSource;
  const [model, setModel] = useState(false);
  const [nonestyle, setNonestyle] = useState(false);
  const [userPath, setUserPath] = useState('')
  const [imageSource, setImageSource] = useState('');

  const dispatch = useDispatch()
  const userData = useSelector(state => state?.verifyotpReducer?.userData);
  // console.log("userData",userData)
  useEffect(() => {
    if (userData?.displayImage) {
      setImageSource(userData.displayImage)
    } else {
      setImageSource(image.userImage)
    }
  }, [userData])
  useEffect(() => {
    idcall()
  }, [])

  const idcall = async () => {
    const ID = await AsyncStorage.getItem('userId')
    accountUrl = `${BASE_URL}/profile/${ID}`;
  //  console.log("accountUrlaccountUrlaccountUrlaccountUrl", accountUrl);
    setUserPath(accountUrl)
  }

  const options = { mediaType: 'photo', quality: 1, includeBase64: false };
  const selectImage = async () => {
    const result = await launchImageLibrary(options);
    console.log('result: ', result);
    imageUpload(result)
    // setImageSource(() => imageSource)
  }
  
  const selectCamera = async () => {
    const result = await launchCamera(options);
    console.log('result: ', result);
    imageUpload(result)
    // setImageSource(() => imageSource)
  }

  const imageUpload = async (imagePath) => {
    console.log("imagePath", imagePath)
    const formData = new FormData();
    formData.append('type', 1);
    formData.append('image', {
      uri: imagePath.assets[0].uri,
      type: imagePath.assets[0].type,
      name: imagePath.assets[0].fileName,
    });
    try {
      const res = await fetch(userPath, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const resJson = await res.json();
      if (resJson) {

        console.log('api res: ', resJson);
        setImageSource(resJson.image);
        const userDataObject = { ...userData, displayImage: resJson.image }
        AsyncStorage.setItem('userData', JSON.stringify(userDataObject));
        console.log("userDataObject", userDataObject);
        console.log("userDataObject", typeof(userDataObject));
        dispatch(setVerifyState(userDataObject))
      }
    } catch (error) {
      console.error(error);
    }
    setModel(false);

  }

  const changeStyle = () => {
    setNonestyle(true);
  };
  return (
    <View>
      <Modal transparent={true} visible={model}>
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
      </Modal>
      <View style={styles.container}>
        <Header2
          inamel="chevron-back-outline"
          title="Edit Profile"
          isBack={() => navigation.goBack()}
          rightname="Save"
          isRightPress={() => navigation.navigate('Account1')}
        />
        <View style={styles.wrap}>
          <TouchableOpacity onPress={() => setModel(true)}>
            <Image source={{ uri: imageSource }} style={styles.image} />
          </TouchableOpacity>
          <View style={{ top: 20 }}>
            <View style={nonestyle ? styles.fieldSet1 : styles.fieldSet}>
              <Text style={nonestyle ? styles.legend : styles.legend1}>
                {' '}
                Enter Your Name{' '}
              </Text>
              <TextInput onFocus={changeStyle} style={styles.inputContainer} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
