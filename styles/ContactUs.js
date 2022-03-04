/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import colors from '../utils/colors';
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black, 
        height: height,
        width : width,
    },
    wrap: {
        alignItems:'center',
        marginTop:40,
    },
    image: {
        height:200,width:300,
    },
});
export default styles;
