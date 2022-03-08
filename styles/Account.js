import {StyleSheet, Platform, Dimensions} from 'react-native';
import colors from '../utils/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    title: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      backgroundColor: colors.black,
      paddingEnd: Platform.OS === 'ios' ? 36 : 18,
      paddingTop: Platform.OS === 'ios' ? 50 : 10,
    },
    titlefont: {
      fontSize: 16,
      fontWeight: '800',
      color: colors.yellow,
    },
    descriptionTxt: {
      color: colors.yellow,
      marginTop: height * 0.15,
      fontWeight: '200',
      fontSize: 20,
    },
    modelContainer :{
      backgroundColor: '#fff',
      padding: 15,
      width: width * 0.8,
      height: height * 0.24,
      borderRadius: 4,
      justifyContent: 'space-between',
    },
    titleTxt :{
      fontSize: 15, 
      padding: 4
    },
    topContainer :{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
});
export default styles;