/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Slider from '@react-native-community/slider';
import {BitMapColorPicker as ColorPicker} from 'react-native-bitmap-color-picker';
import styles from '../styles/Editior';
import TextEditor from './TextEditor';
const WINDOW = Dimensions.get('window');

const Data = [
  {id: 1, text: 'Hubballi-Regular'},
  {id: 2, text: 'BhuTukaExpandedOne-Regular'},
];

const Editior = () => {
  const [imageSource, setImageSource] = useState();
  const [model, setModel] = useState(false);
  const [fontmodel, setFontmodel] = useState(false);
  const [colormodel, setColormodel] = useState(false);
  const [slider, setSlider] = useState(false);
  const [oldcolor, setOldcolor] = useState('black');
  const [sliderValue, setSliderValue] = useState(15);
  const [arrayTextData, setArrayTextData] = useState([]);
  const [textID, setTextID] = useState(0);
  const [textInAction, setTextInAction] = useState(0);
  const [defaultLabel, setdefaultLabel] = useState();
  const [lineHegOfText, setLineofText] = useState(0);
  function changeColor(colorRgb, resType) {
    resType === 'end' && setOldcolor(colorRgb);
    setColorToText(colorRgb);
  }

  const setColorToText = colorofArray => {
    const index = textInAction;
    const markers = [...arrayTextData];
    if (markers[index]) {
      markers[index].defColor = colorofArray;
      setArrayTextData(markers);
    } else {
      return null;
    }
  };

  const fontSizing = sizeValue => {
    const index = textInAction;
    const markers = [...arrayTextData];

    if (markers[index]) {
      markers[index].defFontSize = sizeValue;
      markers[index].defLineHeight = sizeValue;
      setArrayTextData(markers), setLineofText(sizeValue / 2);
    } else {
      return null;
    }
  };

  const setFontFamily = item => {
    const index = textInAction;
    const markers = [...arrayTextData];
    if (markers[index]) {
      markers[index].defFontFamily = item;
      console.warn(markers);
      setArrayTextData(markers);
    } else {
      return null;
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
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      compressImageQuality: 0.7,
      cropping: true,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
      avoidEmptySpaceAroundImage: true,
      includeBase64: true,
    }).then(image => {
      setImageSource(image.path);
    });
    setModel(false);
  }

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={styles.renderitem}>
          <Text
            style={[{fontFamily: `${item.text}`}, styles.renderitemfont]}
            onPress={() => setFontFamily(item.text)}>
            DIGITAL APP
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  function addText() {
    setTextID(textID + 1);
    let DEFS = {
      defTextID: textID,
      defTextValue: defaultLabel,
      defFontFamily: 'Hubballi-Regular',
      defAlign: 'center',
      defLetterSpacing: 0,
      defColor: '#E2A76F',
      defLineHeight: 15,
      defFontSize: 20,
    };
    setArrayTextData([...arrayTextData, DEFS]);
  }
  const removeText = c => {
    const filtered = arrayTextData.filter(x => x.defTextID !== c);
    setArrayTextData(filtered);
    setTextID(arrayTextData.length);
  };

  let ADDED_TEXTS = arrayTextData.map((ID, index) => {
    return (
      <TextEditor
        key={index}
        minWidth={100}
        minHeight={100}
        w={200}
        h={200}
        x={WINDOW.width / 4}
        y={WINDOW.height / 3}
        FontColor={ID.defColor}
        LineHeight={ID.defLineHeight}
        TextAlign={ID.defAlign}
        LetterSpacing={ID.defLetterSpacing}
        FontSize={ID.defFontSize}
        TopRightAction={() => removeText(ID.defTextID)}
        centerPress={() => setTextInAction(ID.defTextID)}
        isDraggable={true}
        isResizable={true}
        onDragStart={() => console.log('-Drag Started')}
        onDragEnd={() => console.log('- Drag ended')}
        onDrag={() => console.log('- Dragging...')}
        onResizeStart={() => console.log('- Resize Started')}
        onResize={() => console.log('- Resizing...')}
        onResizeEnd={() => console.log('- Resize Ended')}
      />
    );
  });

  const colorSubmit = () => {
    setColormodel(!colormodel);
    setOldcolor(oldcolor);
  };

  return (
    <View style={{bottom: 45}}>
      <View style={{bottom: 500}}>{ADDED_TEXTS}</View>
      {/* image  */}
      <Modal transparent={true} visible={model}>
        <View style={styles.imageview1}>
          <View style={styles.imageview2}>
            <Text style={styles.imgtextheader}>Select File from</Text>
            <TouchableOpacity onPress={selectImage} style={styles.imgtouchable}>
              <Text style={styles.imgtext}>Choose Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={selectCamera}
              style={styles.imgtouchable}>
              <Text style={styles.imgtext}>Capture Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModel(!model)}
              style={styles.imgtouchable}>
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
              <TouchableOpacity
                onPress={() => setSlider(!slider)}
                style={styles.fontslidertouchable}>
                <Text>
                  <Icon name="close" size={30} color={colors.white} />
                </Text>
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
                onValueChange={sliderValue => {
                  fontSizing(sliderValue);
                  setSliderValue(sliderValue);
                }}
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
            <Text style={[{color: colors.black}, styles.colorheader]}>
              Choose color
            </Text>
            <View style={styles.colorview2}>
              <ColorPicker
                oldColor={oldcolor}
                onColorChange={changeColor}
                style={styles.colorpicker}
              />
            </View>
            <View style={styles.colorview3}>
              <TouchableOpacity
                onPress={() => setColormodel(!colormodel)}
                style={styles.colortouchable1}>
                <Text style={styles.colortouchabletext}>cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={colorSubmit}
                style={styles.colortouchable2}>
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
              <TouchableOpacity
                onPress={() => setFontmodel(!fontmodel)}
                style={styles.fontstyletouchable}>
                <Text>
                  <Icon name="check" size={30} color={colors.white} />
                </Text>
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
          <TouchableOpacity style={[styles.flex, styles.top]} onPress={addText}>
            <Text>
              <Icon name="title" size={32} color={colors.black} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.flex, styles.top]}
            onPress={() => setColormodel(true)}>
            <Text>
              <Icon name="opacity" size={32} color={colors.black} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flex, styles.top]}
            onPress={() => setFontmodel(true)}>
            <Text>
              <Icon name="format-italic" size={32} color={colors.black} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flex, styles.top]}
            onPress={() => setSlider(true)}>
            <Text>
              <Icon name="format-size" size={32} color={colors.black} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flex, styles.top]}
            onPress={() => setModel(true)}>
            <Text>
              <Icon name="add-photo-alternate" size={32} color={colors.black} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Editior;
