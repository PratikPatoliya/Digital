/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';
const styles = StyleSheet.create({
  lable1: {
    fontSize: 15,
    marginBottom: Platform.OS === 'ios' ? 16 : 8,
    marginTop: Platform.OS === 'ios' ? 10 : 5,
  },
  lable2: {
    fontSize: 13,
    marginBottom: Platform.OS === 'ios' ? 16 : 8,
    marginTop: Platform.OS === 'ios' ? 10 : 5,
  },
});

export default styles;
