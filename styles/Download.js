/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;
import colors from '../utils/colors';
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrap: {
        marginBottom:150,
    },
    image: {
        height: 200, width: 150,
    },
    texttitle: {
        color: colors.white,
        alignSelf:'center',
        top: -20,
    },
});
export default styles;
