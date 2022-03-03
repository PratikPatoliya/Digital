/* eslint-disable prettier/prettier */
import { StyleSheet,Dimensions } from 'react-native';
import colors from '../utils/colors';
const height1 = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const height = width * 0.50;
const styles = StyleSheet.create({
    backgroung:{
        backgroundColor: colors.black,
        height: height1,
    },
    Grig: {
        flex: 1,
        margin: 2,
        marginBottom: 12,
    },
    tinyLogo: {
        width: width * 0.40,
        height: height * 0.80,
        borderRadius: 10,
    },
    viewflate:{
        marginLeft: width * 0.07,
        marginRight: width * 0.05,
        top: 20,
        marginBottom: 50,
    },
});
export default styles;
