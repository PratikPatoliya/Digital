import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Header2 from '../components/Header2';
import colors from '../utils/colors';
import image from '../utils/image';
import ImagePicker from 'react-native-image-crop-picker';
import { CheckBox } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from '../config/baseUrl';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Bussiness } from '../redux/action/BusinessData.action';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const MyTextInput = props => {
  const {
    value,
    name,
    onChange,
    keyboardType,
    multiline,
    numberOfLines,
    dataDetectorTypes,
    maxLength,
    style,
  } = props;
  if (name === 'companyAddress') {
    return (
      <TextInput
        value={value}
        onChangeText={values => onChange({ name, values })}
        keyboardType={keyboardType}
        multiline={true}
        numberOfLines={2}
        style={style}
        dataDetectorTypes={dataDetectorTypes}
      />
    );
  }
  return (
    <TextInput
      value={value}
      onChangeText={values => onChange({ name, values })}
      keyboardType={keyboardType}
      style={style}
      dataDetectorTypes={dataDetectorTypes}
      maxLength={maxLength}
    />
  );
};
const EditBusiness = ({ navigation }) => {
  const [model, setModel] = useState(false);
  const [imageSource, setImageSource] = useState(image.yourlogohere);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [userPath, setUserPath] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [dropDownData, setDropDownData] = useState('');
  const [id, setId] = useState('');
  const [finalDropDownData, setFinalDropDownData] = useState([]);
  // const [mobileNumber, setMobileNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [website, setWebsite] = useState('');
  // const [address, setAddress] = useState('');
  // const [description, setDescription] = useState('');
  // const [condition, setCondition] = useState(false);
  const dispatch = useDispatch();

  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);
  // const [businessCategory, setBusinessCategory] = useState({
  //   mobileNumber: '',
  //   companyName: '',
  //   companyEmailAddress: '',
  //   companyWebsiteOptional: '',
  //   companyAddress: '',
  //   selectBussinessCategory: '',
  //   companyDescription: '',
  //   secondMobileNumber: '',
  // });
  useEffect(() => {
    idcall();
    getDataDropDown();
  }, []);
  const idcall = async () => {
    const ID = await AsyncStorage.getItem('userId');
    setId(ID)
    // accountUrl = `${BASE_URL}/business`;
    // console.log('formformformform', accountUrl);
    // setUserPath(accountUrl);
    Dropdown = `${BASE_URL}/category`;
    console.log("DropdownDropdown", Dropdown);
    setDropDownData(Dropdown)
  };

  const getDataDropDown = () => {
    axios.get(dropDownData).then(res => setFinalDropDownData(res.data) /* console.log("resresresresresresresres",res.data) */).catch(err => console.log("errDemo", err))
  }
  console.log("finelDropDownDatafinelDropDownDatafinalDropDownData", finalDropDownData);


  const [obj, setObj] = useState({
    companyName: '',
    mobileNumber: '',
    companyEmailAddress: '',
    companyWebsiteOptional: '',
    companyAddress: '',
    companyDescription: '',
    selectBussinessCategory: '',
  });
  const [errorMsg, setErrorMsg] = useState({
    companyName: '',
    mobileNumber: '',
    companyEmailAddress: '',
    companyAddress: '',
    selectBussinessCategory: '',
  });

  // console.log("businessCategorybusinessCategory", businessCategory);
  const onChangeFormData = e => {
    // console.log('value', e);
    const { name, values } = e;
    setObj({ ...obj, [name]: values });
    setErrorMsg({ ...errorMsg, [name]: '' });
    /* console.log("value", value);
    setCompanyName(value);
    setBusinessCategory({ ...businessCategory, company_Name: value }) */
  };

  const checkValidation = () => {
    let error = true;
    var emailVlidation =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let companyNameMsg = '';
    let mobileNumberMsg = '';
    let companyEmailAddressMsg = '';
    let companyAddressMsg = '';
    let selectBussinessCategoryMsg = '';

    if (obj.companyName === '') {
      companyNameMsg = 'Companyname is Required!';
      error = false;
    }
    if (obj.mobileNumber === '') {
      mobileNumberMsg = 'Mobile Number is Required!';
      error = false;
    } else if (obj.mobileNumber.length < 10) {
      mobileNumberMsg = 'Mobile Number is not Valid!';
      error = false;
    }
    if (obj.companyEmailAddress === '') {
      companyEmailAddressMsg = 'Company Email is Required!';
      error = false;
    } else if (emailVlidation.test(obj.companyEmailAddress) === false) {
      companyEmailAddressMsg = 'Company Email is not Valid!';
      error = false;
    }
    if (obj.companyAddress === '') {
      companyAddressMsg = 'Company Address is Required!';
      error = false;
    } else if (obj.companyAddress.length < 20) {
      companyAddressMsg = 'Company Address Minimum 20!';
      error = false;
    }
    if (obj.selectBussinessCategory === '') {
      selectBussinessCategoryMsg = 'Company Bussiness Category is Required!';
    }

    setErrorMsg({
      companyName: companyNameMsg,
      mobileNumber: mobileNumberMsg,
      companyEmailAddress: companyEmailAddressMsg,
      companyAddress: companyAddressMsg,
      selectBussinessCategory: selectBussinessCategoryMsg,
    });
    return error;
  };

  const onSubmitFormData = async () => {
    let status = await checkValidation();
    // console.log("statusstatus",status);
    if (status) {
    try {
      await dispatch(Bussiness({
        userId: id,
        mobile_Number: obj.mobileNumber,
        company_Name: obj.companyName,
        company_Email_Address: obj.companyEmailAddress,
        company_Website_Optional: obj.companyWebsiteOptional,
        company_Address: obj.companyAddress,
        select_Bussiness_Category: obj.selectBussinessCategory,
        company_Description: obj.companyDescription,
        second_Mobile_Number: "",
        logoImage: ""
      }))
      setTimeout(() => {
        navigation.navigate('Business')  
    }, 1000);
    } catch (error) {
      alert('alert')
      console.log("error", error);
    }
  }
  };

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
      setImageSource(image.path);
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
    }).then(image => {
      setImageSource(image.path);
    });
    setModel(false);
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
      <Header2
        inamel="chevron-back-outline"
        title="Create Business"
        isBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View
          style={{
            backgroundColor: colors.black,
            width,
            height: height * 1.11,
            marginBottom: 50,
            paddingTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: width * 0.85,
              alignSelf: 'center',
            }}>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  backgroundColor: colors.white,
                  width: width / 3.7,
                  height: height / 7.5,
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <TouchableOpacity onPress={() => setModel(true)}>
                  <Image
                    source={{ uri: imageSource }}
                    style={{
                      height: height / 12,
                      width: width / 5.5,
                      borderRadius: 10,
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: colors.black,
                    alignSelf: 'center',
                    top: 5,
                    fontWeight: '700',
                  }}>
                  Company Logo
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Image
                source={{ uri: image.growyourbusiness }}
                style={{ height: 70, width: 160, alignSelf: 'flex-end' }}
              />
            </View>
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}> Enter Company Name </Text>
            {/* <TextInput
              dataDetectorTypes={'all'}
              keyboardType={'default'}
              style={styles.textbox}
              onChange={(e)=>onChangeFormData(e)}
            /> */}
            <MyTextInput
              name="companyName"
              value={obj.companyName}
              onChange={onChangeFormData}
              style={styles.textbox}
              keyboardType={'default'}
              dataDetectorTypes={'all'}
            />
          </View>
          <View style={styles.condition2}>
            { .companyName !== '' && (
              <Text style={styles.condition}>{errorMsg.companyName}</Text>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: width * 0.85,
              alignSelf: 'center',
            }}>
            <View style={styles.viewtext}>
              <Text style={styles.motextfield}>+91</Text>
            </View>
            <View style={styles.fieldSetmobile}>
              <Text style={styles.legend}> Mobile Number </Text>
              {/* <TextInput
                dataDetectorTypes={'phoneNumber'}
                maxLength={10}
                keyboardType={'numeric'}
                style={styles.textbox}
                onChangeText={onChangeMobileNumber}
              /> */}
              <MyTextInput
                name="mobileNumber"
                value={obj.mobileNumber}
                onChange={onChangeFormData}
                style={styles.textbox}
                keyboardType={'numeric'}
                dataDetectorTypes={'all'}
                maxLength={10}
              />
            </View>
          </View>
          <View style={styles.condition2}>
            {errorMsg.mobileNumber !== '' && (
              <Text style={styles.condition}>{errorMsg.mobileNumber}</Text>
            )}
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}> Enter Company Email Address </Text>
            {/* <TextInput
              dataDetectorTypes={'all'}
              keyboardType={'email-address'}
              style={styles.textbox}
              onChangeText={onChangeEmail}
            /> */}
            <MyTextInput
              name="companyEmailAddress"
              value={obj.companyEmailAddress}
              onChange={onChangeFormData}
              style={styles.textbox}
              keyboardType={'email-address'}
              dataDetectorTypes={'all'}
            />
          </View>
          <View style={styles.condition2}>
            {errorMsg.companyEmailAddress !== '' && (
              <Text style={styles.condition}>
                {errorMsg.companyEmailAddress}
              </Text>
            )}
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>
              {' '}
              Enter Company Website (Optional){' '}
            </Text>
            {/* <TextInput
              dataDetectorTypes={'link'}
              keyboardType={'url'}
              style={styles.textbox}
              onChangeText={onChangeWebsite}
            /> */}
            <MyTextInput
              name="companyWebsiteOptional"
              value={obj.companyWebsiteOptional}
              onChange={onChangeFormData}
              style={styles.textbox}
              keyboardType={'url'}
              dataDetectorTypes={'link'}
            />
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}> Enter Company Address </Text>
            {/* <TextInput
              dataDetectorTypes={'address'}
              keyboardType={'default'}
              style={styles.adresstextbox}
              multiline={true}
              numberOfLines={2}
              onChangeText={onChangeAddress}
            /> */}
            <MyTextInput
              name="companyAddress"
              value={obj.companyAddress}
              onChange={onChangeFormData}
              style={styles.adresstextbox}
              multiline={true}
              numberOfLines={2}
              keyboardType={'default'}
              dataDetectorTypes={'address'}
            />
          </View>
          <View style={styles.condition2}>
            {errorMsg.companyAddress !== '' && (
              <Text style={styles.condition}>{errorMsg.companyAddress}</Text>
            )}
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>
              {' '}
              Enter Company Bussiness Category{' '}
            </Text>
            {/* <TextInput
              dataDetectorTypes={'all'}
              keyboardType={'email-address'}
              style={styles.textbox}
              onChangeText={onChangeEmail}
            /> */}
            <MyTextInput
              name="selectBussinessCategory"
              value={obj.selectBussinessCategory}
              onChange={onChangeFormData}
              style={styles.textbox}
              keyboardType={'default'}
              dataDetectorTypes={'all'}
            />
          </View>
          <View style={styles.condition2}>
            {errorMsg.selectBussinessCategory !== '' && (
              <Text style={styles.condition}>
                {errorMsg.selectBussinessCategory}
              </Text>
            )}
          </View>
          {/* <View
            style={{ width: width * 0.85, alignSelf: 'center', marginTop: 15 }}>
            <DropDownPicker
              placeholder="Select"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              // setItems={setItems}
              labelStyle={{ color: colors.white }}
              textStyle={{ color: colors.black }}
              containerStyle={{ color: colors.black }}
              placeholderStyle={{
                color: colors.white,
                fontWeight: 'bold',
              }}
              theme="LIGHT"
              style={{
                backgroundColor: colors.black,
                borderColor: colors.white,
                borderWidth: 2,
              }}
              onChangeItem={item => console.log(item.label, item.value)}
              arrowIconStyle={{ color: colors.white }}
              dropDownMaxHeight={500}
            />
            <DropDownPicker
              open={open}
              setOpen={setOpen}

              items={[
                { label: 'Item 1', value: 1 },
                { label: 'Item 2', value: 2 },
                { label: 'Item 3', value: 3 },
                { label: 'Item 4', value: 4 },
                { label: 'Item 5', value: 5 },
                { label: 'Item 6', value: 6 },
                { label: 'Item 7', value: 7 },
                { label: 'Item 8', value: 8 },
              ]}
              defaultNull={country === null}
              placeholder="Select an item"
              onChangeItem={(item) => {
                console.log("item", item)
                setCountry({
                  item: item.value
                });
              }}
              dropDownMaxHeight={240}
            /> 
           </View>  */}

          <View
            style={{ width: width * 0.85, marginTop: 10, alignSelf: 'center' }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 16,
                justifyContent: 'center',
              }}>
              Company Follow Us
              <Text style={{ fontSize: 14, color: colors.darkWhite }}>
                (optional)
              </Text>
            </Text>
            <View style={{ flexDirection: 'row', right: 10 }}>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  style={{ borderColor: colors.black }}
                  // onChangeText={onChangeItems}
                  // checked={true}
                  checkedColor={colors.yellow}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  f
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check2}
                  onPress={() => setCheck2(!check2)}
                  style={{ borderColor: colors.black }}
                  checkedColor={colors.yellow}
                // right={true}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  i
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check3}
                  onPress={() => setCheck3(!check3)}
                  style={{ borderColor: colors.black }}
                  checkedColor={colors.yellow}
                  right={true}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  w
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check4}
                  onPress={() => setCheck4(!check4)}
                  style={{ borderColor: colors.black }}
                  checkedColor={colors.yellow}
                  right={true}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  t
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check5}
                  onPress={() => setCheck5(!check5)}
                  style={{ borderColor: colors.black }}
                  checkedColor={colors.yellow}
                  right={true}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  y
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check6}
                  onPress={() => setCheck6(!check6)}
                  style={{ borderColor: colors.black }}
                  checkedColor={colors.yellow}
                  right={true}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  p
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}> Company Description (Optional) </Text>
            {/* <TextInput
              dataDetectorTypes={'all'}
              keyboardType={'default'}
              style={styles.textbox}
              onChangeText={onChangeDescription}
            /> */}
            <MyTextInput
              name="companyDescription"
              value={obj.companyDescription}
              onChange={onChangeFormData}
              style={styles.textbox}
              keyboardType={'default'}
              dataDetectorTypes={'all'}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.click} onPress={onSubmitFormData}>
              <Text style={styles.buttontext}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditBusiness;

const styles = StyleSheet.create({
  condition: {
    color: colors.red,
    // alignSelf: 'center',
    marginLeft: width * 0.09,
    marginTop: 2,
    marginBottom: -10,
    fontSize: 12,
  },
  condition2: {
    height: height * 0.014,
  },
  button: {
    backgroundColor: colors.yellow,
    marginTop: 20,
    width: width * 0.45,
    alignSelf: 'center',
    borderRadius: 20,
  },
  click: {
    height: 35,
    justifyContent: 'center',
  },
  buttontext: {
    alignSelf: 'center',
    fontSize: 18,
    color: colors.black,
  },
  fieldSet: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 20,
    width: width * 0.85,
    alignSelf: 'center',
  },
  legend: {
    position: 'absolute',
    fontSize: 12,
    top: -12,
    // alignSelf: 'center',
    marginLeft: 10,
    fontWeight: '500',
    backgroundColor: 'black',
    color: '#fff',
  },
  textbox: {
    color: colors.white,
    // height: Platform.OS === 'ios' ? 45 : 45,
    borderRadius: 5,
    height: height * 0.05,
    // textAlign: 'center',
    marginLeft: 15,
    fontSize: 16,
  },
  adresstextbox: {
    color: colors.white,
    borderRadius: 5,
    height: height * 0.1,
    marginLeft: 15,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  viewtext: {
    flex: 0.15,
    borderRadius: 5,
    marginRight: 10,
    borderColor: colors.white,
    borderWidth: 2,
    height: height * 0.05,
    top: 22,
    width: width * 0.15,
    justifyContent: 'center',
  },
  motextfield: {
    color: colors.white,
    fontSize: 16,
    alignSelf: 'center',
  },
  fieldSetmobile: {
    flex: 0.85,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 20,
    width: width * 0.5,
    alignSelf: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelContainer: {
    backgroundColor: '#fff',
    padding: 15,
    width: width * 0.8,
    height: height * 0.24,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  titleTxt: {
    fontSize: 15,
    padding: 4,
  },
});
