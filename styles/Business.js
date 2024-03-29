import {StyleSheet, Dimensions} from 'react-native';
import colors from '../utils/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  commonColor: {
    color: colors.white,
  },
  container: {
    backgroundColor: colors.black,
    height: height,
  },
  wrap: {
    margin: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: colors.yellow,
    borderRadius:9,
  },
  firstWidth: {
    width: '24%',
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    borderRadius: 10,
  },
  secondWidth: {
    width: '68%',
  },
  thirdWidth: {
    width: '8%',
    top: 5,
  },
  Businessfdb: {
    position: 'absolute',
    margin: 10,
    marginBottom: Platform.OS === 'ios' ? 120 : 50,
    right: 0,
    bottom: height *0.08,
    backgroundColor: colors.yellow,
    fontSize:100
  },
});
export default styles;
