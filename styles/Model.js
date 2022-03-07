/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../utils/colors';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const styles = StyleSheet.create({
    view1: {
        justifyContent: 'flex-end',
    },
    modalview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalview2: {
        backgroundColor: '#fff',
        padding: 20,
        width: width * 0.80,
        height: height * 2,
        borderRadius: 10,
    },
    modalview3: {
        width: width * 0.7,
        height: height,
        marginBottom: height * 0.1,
        alignItems: 'center',
    },
    modalimg: {
        width: width * 0.50,
        height: 200,
        resizeMode: 'stretch',
    },
    modalheaderview: {
        marginBottom: height * 0.04,
        alignItems: 'center',
    },
    modalheadertext: {
        fontSize: 17,
        color: colors.black,
        fontWeight: '900',
    },
    modaltitleview: {
        marginBottom: height * 0.06,
    },
    modaltitletext: {
        fontSize: 14,
        textAlign: 'center',
        color: '#0f0f0f',
        fontWeight: '100',
    },
    modalwarningview: {
        alignItems: 'center',
        marginBottom: height * 0.04,
    },
    modalwarningtext: {
        fontSize: 14,
        fontWeight: '700',
        color: 'black',
    },
    modalbtnview: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalbuttouchable: {
        backgroundColor: "#dbbc3d",
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.18,
        borderRadius: 20,
        width: width * 0.18,
    },
    modalbuttouchablemobiledata:{
        width: width * 0.28,
        marginLeft: 20,
    },
    modalbuttouchabletext: {
        alignItems: 'center',
    },
    showbtm:{
        color: colors.white,
    },

});

export default styles;
