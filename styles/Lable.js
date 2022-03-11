import {StyleSheet} from 'react-native';
import colors from '../utils/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 6,
    marginLeft: 10,
  },
  title: {
    flex: 1,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewtxt: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 12,
    marginRight: 10,
  },
});
export default styles;
