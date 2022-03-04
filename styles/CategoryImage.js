import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 130,
  },
  Grig: {
    borderWidth: 0.5,
    alignItems: 'center',
    margin: 5,
    bottom: 5,
  },
  tinyLogo: {
    borderRadius: 5,
    width: width * 0.29,
    height: 120,
  },
  item: {
    height: 100,
    marginLeft: 12,
    marginRight: 12,
    bottom: 0,
  },
});

export default styles;
