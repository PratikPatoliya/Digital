import {StyleSheet, Dimensions} from 'react-native';
import colors from '../utils/colors';
const height1 = Dimensions.get('window').height;
const {width} = Dimensions.get('window');
const height = width * 0.5;
const styles = StyleSheet.create({
  backgroung: {
    backgroundColor: colors.black,
    height: height1,
  },
  Grig: {
    flex: 1,
    margin: 2,
    marginBottom: 12,
  },
  tinyLogo: {
    width: width * 0.38,
    height: height * 0.7,
    borderRadius: 10,
  },
  viewflate: {
    marginLeft: width * 0.08,
    marginRight: width * 0.07,
    top: 20,
    marginBottom: 50,
  },
  container: {
    flex: 1,
  },
});
export default styles;
