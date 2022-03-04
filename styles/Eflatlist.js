import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import colors from '../utils/colors';

const styles = StyleSheet.create({
  Grig: {
    borderWidth: 0.5,
    alignItems: 'center',
    margin: 5,
    bottom: 5,
  },
  tinyLogo: {
    borderRadius: 5,
    width: width * 0.29,
    height: 110,
  },
  container: {
    backgroundColor: colors.black,
    height: 130,
    marginBottom: 20,
  },
  item: {
    height: 100,
    marginLeft: 12,
    marginRight: 12,
    bottom: 0,
  },
});
export default styles;
