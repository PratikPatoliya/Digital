import React, { useState } from 'react';
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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EditBusiness = ({ navigation }) => {
  const [model, setModel] = useState(false);
  const [imageSource, setImageSource] = useState(image.yourlogohere);
  const [check1, setCheck1] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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
        title="Edit Business"
        isBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={{ backgroundColor: colors.black, width, height,marginBottom:40,paddingTop:20 }}>
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
            <TextInput
              dataDetectorTypes={'all'}
              keyboardType={'default'}
              style={styles.textbox}
            />
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
              <TextInput
                dataDetectorTypes={'phoneNumber'}
                maxLength={10}
                keyboardType={'numeric'}
                style={styles.textbox}
              />
            </View>
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}> Enter Company Email Address </Text>
            <TextInput
              dataDetectorTypes={'all'}
              keyboardType={'email-address'}
              style={styles.textbox}
            />
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>
              {' '}
              Enter Company Website (Optional){' '}
            </Text>
            <TextInput
              dataDetectorTypes={'link'}
              keyboardType={'url'}
              style={styles.textbox}
            />
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}> Enter Company Address </Text>
            <TextInput
              dataDetectorTypes={'address'}
              keyboardType={'default'}
              style={styles.adresstextbox}
              multiline={true}
              numberOfLines={2}
            />
          </View>
          <View
            style={{ width: width * 0.85, alignSelf: 'center', marginTop: 15 }}>
            <DropDownPicker
              placeholder="Select"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
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
              arrowIconStyle={{ color: colors.white }}
            />
          </View>

          <View style={{ width: width*.85, marginTop: 10 ,alignSelf:'center'}}>
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
            <View style={{ flexDirection: 'row' ,right:10 }}>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  style={{ borderColor: colors.black }}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  f
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  style={{ borderColor: colors.black }}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  i
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  style={{ borderColor: colors.black }}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  w
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  style={{ borderColor: colors.black }}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  t
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  style={{ borderColor: colors.black }}
                />
                <Text
                  style={{ color: colors.white, alignSelf: 'center', right: 10 }}>
                  y
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <CheckBox
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  style={{ borderColor: colors.black }}
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
            <TextInput
              dataDetectorTypes={'all'}
              keyboardType={'default'}
              style={styles.textbox}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.click}>
              <Text style={styles.buttontext}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditBusiness;

const styles = StyleSheet.create({
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
