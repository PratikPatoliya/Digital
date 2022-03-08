/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions, Platform} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import colors from '../utils/colors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black, 
    height: height
  },
  wrap: {
    alignItems: 'center', 
    marginTop: height * 0.25
  },
  image: {
    height: 120, 
    width: 120, 
    borderRadius: 100
  },
  inputContainer: {
    color: colors.white,
    width: width * 0.8,
    height: Platform.OS === 'ios' ? 45 : 45,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  fieldSet: {
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#fff',
  },
  legend: {
    position: 'absolute',
    fontSize: 11,
    top: -10,
    alignSelf: 'center',
    fontWeight: '500',
    backgroundColor: 'black',
    color: '#fff',
  },
});
export default styles;
