/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    view1: {
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        width, height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 200,
        height: 160,
    },
    textheader: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: height / 15,
        color: '#4e6dcc',
    },
    texttitle: {
        fontSize: 15,
        fontWeight: '100',
        marginTop: 5,
    },
    textnumber: {
        color: '#06a10e',
        fontWeight: '600',
    },
});
export default styles;
