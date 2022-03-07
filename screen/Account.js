/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView, Modal,Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
import ImagePicker from 'react-native-image-crop-picker';
import image from '../utils/image';
import Share from 'react-native-share';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Account = ({ navigation }) => {
    const [model, setModel] = useState(false);
    const [imageSource, setImageSource] = useState(image.userImage);
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

    const myCustomerShare = async () => {
        const shareOption = {
            message: `Hey! Customer Welcome to Digital Customer App`,
        };
        try {
            const ShareResponse = await Share.open(shareOption);
            console.log(JSON.stringify(ShareResponse));
        }
        catch (error) {
            console.log('Error => ', error);
        }
    };

    return (
        <View>
            <Modal transparent={true} visible={model}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#fff', padding: 15, width: width * 0.80, height: height * 0.24, borderRadius: 4, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 17, color: colors.black }}>Select File from</Text>
                        <TouchableOpacity onPress={selectImage} style={{ backgroundColor: colors.white, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, padding: 4 }}>Choose Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={selectCamera} style={{ backgroundColor: colors.white, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, padding: 4 }}>Capture Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModel(!model)} style={{ backgroundColor: colors.white, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, padding: 4 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={{ backgroundColor: colors.black, height, width }}>
                <View style={styles.title}>
                    <TouchableOpacity onPress={() => navigation.navigate('Editprofile')}>
                        <Text style={styles.titlefont}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <TouchableOpacity onPress={() => setModel(true)}>
                            <Image source={{ uri: imageSource }} style={{ height: 120, width: 120, borderRadius: 100 }} />
                        </TouchableOpacity>
                        <Text style={{ color: colors.white, fontSize: 25, marginTop: 5 }}>User Name</Text>
                        <Text style={{ color: colors.white, fontSize: 15, marginTop: 0 }}>1234567890</Text>
                    </View>
                    <View style={{ margin: 10, marginTop: 30 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Termsconditions')} style={{ margin: 7, marginLeft: 20, flexDirection: 'row' }}>
                            <Icon name="notebook-outline" size={22} style={{ color: colors.white, marginRight: 6 }} />
                            <Text style={{ color: colors.white, fontSize:18 }}>Terms & Conditions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Privatepolicy')} style={{ margin: 7, marginLeft: 20, flexDirection: 'row' }}>
                            <Icon name='lock' size={22} style={{ color: colors.white, marginRight: 6 }} />
                            <Text style={{ color: colors.white, fontSize:18 }}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={{ margin: 7, marginLeft: 20, flexDirection: 'row' }}>
                            <Icon name='cellphone-message' size={22} style={{ color: colors.white, marginRight: 6 }} />
                            <Text style={{ color: colors.white, fontSize:18 }}>Contact US</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={myCustomerShare} style={{ margin: 7, marginLeft: 20, flexDirection: 'row' }}>
                            <Icon name='share-all' size={22} style={{ color: colors.white, marginRight: 6 }} />
                            <Text style={{ color: colors.white, fontSize:18 }}>Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('login')} style={{ margin: 7, marginLeft: 20, flexDirection: 'row' }}>
                            <Icon name='logout' size={22} style={{ color: colors.white, marginRight: 6 }} />
                            <Text style={{ color: colors.white, fontSize:18 }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:colors.yellow,marginTop:height*0.15 ,fontWeight:'200',fontSize:20}}>Designed by HOME Tech</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    title: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: colors.black,
        paddingEnd: Platform.OS === 'ios' ? 36 : 18,
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
    },
    titlefont: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.yellow,
    },
});
