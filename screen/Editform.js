/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import colors from '../utils/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Editform = () => {
  const [nonestyle, setNonestyle] = useState(false);
  const [nonestyle1, setNonestyle1] = useState(false);

  const changeStyle = () => {
    setNonestyle(true);
  };
  const changeStyle1 = () => {
    setNonestyle1(true);
  };

  console.log('nonestyle', nonestyle);
  console.log('nonestyle1', nonestyle1);
  return (
    <View>
      <View style={nonestyle ? styles.fieldSet : styles.fieldSet1}>
        <Text style={nonestyle ? styles.legend : styles.legend1}>
          {' '}
          Enter Your Name{' '}
        </Text>
        <TextInput onFocus={changeStyle} style={styles.textbox} />
      </View>
      <View style={nonestyle1 ? styles.fieldSet : styles.fieldSet1}>
        <Text style={nonestyle1 ? styles.legend : styles.legend1}>
          {' '}
          Enter Your Name{' '}
        </Text>
        <TextInput onBlur={changeStyle1} style={styles.textbox} />
      </View>
      {/* <View style={nonestyle ? styles.fieldSet : styles.fieldSet1}  >
                <Text style={nonestyle ? styles.legend : styles.legend1}>  Enter Your Name  </Text>
                <TextInput onFocus={changeStyle} style={{ color: colors.white, width: width * 0.80, height: Platform.OS === 'ios' ? 45 : 45, borderRadius: 5, textAlign: 'center', fontSize: 16 }} />
            </View> */}
    </View>
  );
};

export default Editform;

const styles = StyleSheet.create({
  fieldSet: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.yellow,
    marginTop: 20,
  },
  fieldSet1: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 20,
  },
  legend: {
    position: 'absolute',
    fontSize: 11,
    top: -10,
    marginLeft: 10,
    fontWeight: '500',
    backgroundColor: 'black',
    color: colors.yellow,
  },
  legend1: {
    position: 'absolute',
    fontSize: 15,
    top: 10,
    alignSelf: 'center',
    marginLeft: 10,
    fontWeight: '500',
    backgroundColor: 'black',
    color: '#fff',
  },
  textbox: {
    color: colors.white,
    width: width * 0.8,
    height: Platform.OS === 'ios' ? 45 : 45,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
});
