/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { DragTextEditor } from 'react-native-drag-text-editor';
const WINDOW = Dimensions.get('window');


const seting = () => {
  const [arrayTextData, setArrayTextData] = useState([]);
  const [textID, setTextID] = useState(0);
  const [textInAction, setTextInAction] = useState(0);
  const [defaultLabel, setdefaultLabel] = useState('5454');
  useEffect(() => {
    console.log('Heloooooooooooooooo');
    console.warn('textID',textID);
    addText();
  }, []);
  console.log("textID",textID);
  function addText() {
    console.log('Hello');
    setTextID(textID + 1);
    let DEFS = {
      defTextID: textID,
      defTextValue: defaultLabel,
      defAlign: 'center',
      defLetterSpacing: 0,
      defColor: '#000000',
      defLineHeight: 15,
      defFontSize: 15,
    };
    // arrayTextData.push([DEFS]);
    setArrayTextData([...arrayTextData, DEFS]);
  }
  const removeText = (c) => {
    const filtered = arrayTextData.filter(x => x.defTextID !== c);
    console.warn("filtered", filtered);
    //  console.log("filtered",filtered);
    setArrayTextData(filtered);
    setTextID(arrayTextData.length);
  };

  const processButtons = () => {
    return (
      <TouchableOpacity
        onPress={() => addText()}
        style={styles.touch}>
        <Text>Hello</Text>
      </TouchableOpacity>
    );
  };


  let ADDED_TEXTS = arrayTextData.map((ID, index) => {
    return (
      <DragTextEditor
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
        centerPress={() => textInAction(ID.defTextID)}
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

  return (
    <View>
      <Text>seting</Text>
      <View >
        {processButtons()}
      </View>
      {ADDED_TEXTS}
    </View>
  );
};

export default seting;

const styles = StyleSheet.create({});
