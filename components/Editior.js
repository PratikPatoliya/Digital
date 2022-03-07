/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, TouchableOpacity, View,  Modal, SafeAreaView, FlatList, ScrollView } from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Slider from '@react-native-community/slider';
import { BitMapColorPicker as ColorPicker } from 'react-native-bitmap-color-picker';
import styles from '../styles/Editior';

const Data = [
    { id: 1, text: 'Hubballi-Regular' },
    { id: 2, text: 'BhuTukaExpandedOne-Regular' },
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

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={styles.renderitem}>
                    <Text style={[{fontFamily:`${item.text}`},styles.renderitemfont]}>Avenir</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View>
            {/* image  */}
            <Modal transparent={true} visible={model}>
                <View style={styles.imageview1}>
                    <View style={styles.imageview2}>
                        <Text style={styles.imgtextheader}>Select File from</Text>
                        <TouchableOpacity onPress={selectImage} style={styles.imgtouchable}>
                            <Text style={styles.imgtext}>Choose Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={selectCamera} style={styles.imgtouchable}>
                            <Text style={styles.imgtext}>Capture Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModel(!model)} style={styles.imgtouchable}>
                            <Text style={styles.imgtext}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* font Slider */}
            <Modal transparent={true} visible={slider}>
                <View style={styles.fontslidermainview}>
                    <View style={styles.fontsliderview1}>
                        <View style={styles.fontsliderview2}>
                            <Text style={styles.fontsliderheader}>Change text size</Text>
                            <TouchableOpacity onPress={() => setSlider(!slider)} style={styles.fontslidertouchable}>
                                <Text><Icon name="close" size={30} color={colors.white} /></Text>
                            </TouchableOpacity>
                        </View>
                        <SafeAreaView style={styles.fontslidersafearea}>
                            <Slider
                                style={styles.fontsliderslider}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor="#fff"
                                maximumTrackTintColor="#3d3215"
                                value={sliderValue}
                                onValueChange={
                                    (sliderValue) => setSliderValue(sliderValue)
                                }
                            />
                            <Text style={styles.fontslidersafeareatext}>
                                {sliderValue.toFixed()}
                            </Text>
                        </SafeAreaView>
                    </View>
                </View>
            </Modal>

            {/* colors */}

            <Modal transparent={true} visible={colormodel}>
                <View style={styles.colorsview}>
                    <View style={styles.colorview1}>
                        <Text style={[{ color: oldcolor},styles.colorheader]}>Choose color</Text>
                        <View style={styles.colorview2}>
                            <ColorPicker
                                oldColor={oldcolor}
                                onColorChange={changeColor}
                                style={styles.colorpicker}
                            />
                        </View>
                        <View style={styles.colorview3}>
                            <TouchableOpacity onPress={() => setColormodel(!colormodel)} style={styles.colortouchable1}>
                                <Text style={styles.colortouchabletext}>cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setOldcolor(oldcolor)} style={styles.colortouchable2}>
                                <Text style={styles.colortouchabletext}>ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* font style */}
            <Modal transparent={true} visible={fontmodel}>
                <View style={styles.fontstyleview}>
                    <View style={styles.fontstyleview1}>
                        <View style={styles.fontstyleview2}>
                            <Text style={styles.fontstyleheader}>Select font style</Text>
                            <TouchableOpacity onPress={() => setFontmodel(!fontmodel)} style={styles.fontstyletouchable}>
                                <Text><Icon name="check" size={30} color={colors.white} /></Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{}}>
                            <FlatList data={Data} renderItem={renderItem} numColumns={3} />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <View style={styles.mainview}>
                <View style={styles.mainview1}>
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
