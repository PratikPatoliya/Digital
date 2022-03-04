/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
// eslint-disable-next-line eol-last
import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import colors from '../utils/colors';

const styles = StyleSheet.create({
    topview: {
        paddingTop: 70,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imghei_wid: {
        width: 200,
        height: 160,
    },
    verifytext: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: height / 15,
        color: '#4e6dcc',
    },
    numbertext: {
        fontSize: 15,
        fontWeight: '100',
        marginTop: 5,
    },
    inputview: {
        flex: 1,
        flexDirection: 'row',
        marginTop: height / 15,
    },
    viewtext: {
        flex: 0.2,
        fontSize: 15,
        borderRadius: 5,
        borderWidth: 0.5,
        alignItems: 'center',
        marginLeft: 17,
        paddingTop: 10,
        height: 40,
        paddingLeft: 15,
        backgroundColor: '#c9f2cb',
        marginRight: 10,
    },
    textinput: {
        flex: 1,
        borderWidth: 0.5,
        borderRadius: 4,
        marginRight: 20,
        height: 40,
    },
    buttonview: {
        marginBottom: height / 3,
        width: width / 1.24,
        height:35,
        marginTop: height / 12,
        borderRadius:3,
        backgroundColor:"#06a10e",
        justifyContent:'center',
    },
    tochabletext:{
        fontSize:15,
        color:colors.white,
        alignSelf:'center',
        fontWeight:'600',
    },

});

export default styles;