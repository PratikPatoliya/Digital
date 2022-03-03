/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Alert, Image, Modal, SafeAreaView, FlatList, ScrollView } from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Slider from '@react-native-community/slider';
import { BitMapColorPicker as ColorPicker } from 'react-native-bitmap-color-picker';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


const { width } = Dimensions.get('window');
const height = width * 0.50;

const Data = [
    { id: 1, text: 'Avenir' },
    { id: 2, text: 'monospace' },
    { id: 3, text: 'serif' },
    { id: 4, text: 'Roboto' },
    { id: 5, text: 'sans-serif' },
    { id: 6, text: 'sans-serif-light' },
    { id: 7, text: 'sans-serif-thin' },
    { id: 8, text: 'sans-serif-condensed' },
    { id: 9, text: 'sans-serif-medium' },
    { id: 10, text: 'Arial' },
    // { id: 11, text: 'Helvetica-Bold' },
    // { id: 12, text: 'HelveticaNeue-Italic' },
    // { id: 13, text: 'DancingScript-Italic' },
    // { id: 14, text: 'DancingScript-Bold' },
    // { id: 15, text: 'DancingScript' },
    // { id: 16, text: 'Yanonekaffeesatz-ExtraLight' },
    // { id: 17, text: '' },
    // { id: 18, text: '' },
    // { id: 19, text: '' },
    // { id: 20, text: '' },
    // { id: 21, text: '' },
    // { id: 22, text: '' },
    // { id: 23, text: '' },
    // { id: 24, text: '' },
    // { id: 25, text: '' },
    // { id: 26, text: '' },
    // { id: 27, text: '' },
    // { id: 28, text: '' },
    // { id: 29, text: '' },
    // { id: 30, text: '' },
];

const Editior = (props) => {
    const { imageSource, setImageSource } = props;
    const [model, setModel] = useState(false);
    const [fontmodel, setFontmodel] = useState(false);
    const [colormodel, setColormodel] = useState(false);
    const [slider, setSlider] = useState(false);
    const [oldcolor, setOldcolor] = useState('black');
    const [sliderValue, setSliderValue] = useState(15);
    function changeColor(colorRgb, resType) {
        resType === 'end' && setOldcolor(colorRgb);
    }

    function selectImage() {
        ImagePicker.openPicker({
            // width: 300,
            // height: 400,
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
            // console.log(image);
            // console.warn(image.path);
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
            // console.log(image);
            // console.warn(image.path);
            setImageSource(image.path);
        });
        setModel(false);
    }

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={{borderWidth:1,borderColor:colors.white ,margin:4 ,borderRadius:4 }}>
                    <Text style={{ color: colors.white ,fontFamily:`${item.text}`,padding:5,width:width * 0.275 ,height:height * 0.20 ,alignSelf:'center',justifyContent:'center'}}>Avenir</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View>

            {/* image  */}
            <Modal transparent={true} visible={model}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#fff', padding: 15, width: width * 0.80, height: height * 0.9, borderRadius: 4, justifyContent: 'space-between' }}>
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

            {/* font Slider */}

            <Modal transparent={true} visible={slider}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: colors.black, padding: 15, width: width, height: 150, borderRadius: 4, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 17, color: colors.white }}>Change text size</Text>
                            <TouchableOpacity onPress={() => setSlider(!slider)} style={{ backgroundColor: colors.black, justifyContent: 'center' }}>
                                <Text><Icon name="close" size={30} color={colors.white} /></Text>
                            </TouchableOpacity>
                        </View>
                        <SafeAreaView style={{ flexDirection: 'row', bottom: 30 }}>
                            <Slider
                                style={{ width: width * 0.85, height: 33 }}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor="#fff"
                                maximumTrackTintColor="#3d3215"
                                value={sliderValue}
                                onValueChange={
                                    (sliderValue) => setSliderValue(sliderValue)
                                }
                            />
                            <Text style={{ color: colors.white, fontSize: 20 }}>
                                {sliderValue.toFixed()}
                            </Text>
                        </SafeAreaView>
                    </View>
                </View>
            </Modal>

            {/* colors */}

            <Modal transparent={true} visible={colormodel}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: colors.white, padding: 15, width: width * 0.8, height: height * 2, borderRadius: 2, justifyContent: 'space-between' }}>
                        <Text style={{ color: oldcolor, fontSize: 20 }} >Choose color</Text>
                        <View style={{ alignItems: 'center', borderRadius: 200 }}>
                            <ColorPicker
                                oldColor={oldcolor}
                                onColorChange={changeColor}
                                style={{ width: width * 0.7, height: height * 1.4 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setColormodel(!colormodel)} style={{ marginRight: 20 }}>
                                <Text style={{ fontSize: 17, color: colors.black }}>cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setOldcolor(oldcolor)} style={{ marginRight: 10 }}>
                                <Text style={{ fontSize: 17, color: colors.black }}>ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* font style */}

            <Modal transparent={true} visible={fontmodel}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: colors.black, padding: 15, width: width, height: 270, borderRadius: 4}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 17, color: colors.white }}>Select font style</Text>
                            <TouchableOpacity onPress={() => setFontmodel(!fontmodel)} style={{ backgroundColor: colors.black, justifyContent: 'center' }}>
                                <Text><Icon name="check" size={30} color={colors.white} /></Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{}}>
                            <FlatList data={Data} renderItem={renderItem} numColumns={3} />
                        </ScrollView>
                    </View>
                </View>
            </Modal>


            <View style={{ backgroundColor: colors.white }}>
                <View style={{ flex: 1, flexDirection: 'row', height: 50 }}>
                    <TouchableOpacity style={[styles.flex, styles.top]}>
                        <Text>
                            <Icon name="title" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex, styles.top]} onPress={() => setColormodel(true)}>
                        <Text >
                            <Icon name="opacity" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex, styles.top]} onPress={() => setFontmodel(true)}>
                        <Text >
                            <Icon name="format-italic" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex, styles.top]} onPress={() => setSlider(true)}>
                        <Text >
                            <Icon name="format-size" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex, styles.top]} onPress={() => setModel(true)}>
                        <Text >
                            <Icon name="add-photo-alternate" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default Editior;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center',
    },
    top: {
        top: 10,
    },
});
