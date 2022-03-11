import {StyleSheet, Dimensions} from 'react-native';
import colors from '../utils/colors';
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap: {
    marginBottom: 150,
  },
  image: {
    height: 200,
    width: 150,
  },
  texttitle: {
    color: colors.white,
    alignSelf: 'center',
    top: -20,
  },
});
export default styles;
