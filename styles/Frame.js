/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../utils/colors';
const {width} = Dimensions.get('window');
const height = width * 0.5;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 2,
    backgroundColor: colors.yellow,
  },
  insideimage: {
    width: 400,
    height: 300,
  },
  fview: {
    backgroundColor: colors.black,
    width,
    height: height * 4,
  },
  flatelistview: {
    top: height * 0.15,
    marginBottom: height * 0.06,
  },
  topmargin: {
    marginBottom: 200,
  },
});

export default styles;
