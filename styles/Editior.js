/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../utils/colors';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const styles = StyleSheet.create({
    renderitem: {
        borderWidth: 1,
        borderColor: colors.white,
        margin: 4
        , borderRadius: 4,
    },
    renderitemfont: {
        color: colors.white,
        padding: 5,
        width: width * 0.275
        , height: height * 0.20
        , alignSelf: 'center',
        justifyContent: 'center',
    },

    // image

    imageview1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageview2: {
        backgroundColor: '#fff',
        padding: 15,
        width: width * 0.80,
        height: height * 0.9,
        borderRadius: 4,
        justifyContent: 'space-between',
    },
    imgtouchable: {
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    imgtextheader: {
        fontSize: 17,
        color: colors.black,
    },
    imgtext: {
        fontSize: 15,
        padding: 4,
    },

    // fontslider

    fontslidermainview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    fontsliderview1: {
        backgroundColor: colors.black,
        padding: 15,
        width: width,
        height: 150,
        borderRadius: 4,
        justifyContent: 'space-between',
    },
    fontsliderview2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fontsliderheader: {
        fontSize: 17,
        color: colors.white,
    },
    fontslidertouchable: {
        backgroundColor: colors.black,
        justifyContent: 'center',
    },
    fontslidersafearea: {
        flexDirection: 'row',
        bottom: 30,
    },
    fontsliderslider: {
        width: width * 0.85,
        height: 33,
    },
    fontslidersafeareatext: {
        color: colors.white,
        fontSize: 20,
    },

    //  colors

    colorsview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorview1: {
        backgroundColor: colors.white,
        padding: 15,
        width: width * 0.8,
        height: height * 2,
        borderRadius: 2,
        justifyContent: 'space-between',
    },
    colorheader: {
        fontSize: 20,
    },
    colorview2: {
        alignItems: 'center',
        borderRadius: 200,
    },
    colorpicker: {
        width: width * 0.7,
        height: height * 1.4,
    },
    colorview3: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    colortouchabletext: {
        fontSize: 17,
        color: colors.black,
    },
    colortouchable1: {
        marginRight: 20,
    },
    colortouchable2: {
        marginRight: 10,
    },

    //font style
    fontstyleview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    fontstyleview1: {
        backgroundColor: colors.black,
        padding: 15,
        width: width,
        height: 270,
        borderRadius: 4,
    },
    fontstyleview2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fontstyleheader: {
        fontSize: 17,
        color: colors.white,
    },
    fontstyletouchable: {
        backgroundColor: colors.black,
        justifyContent: 'center',
    },


    mainview: {
        backgroundColor: colors.white,
    },
    mainview1: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
    },
    flex: {
        flex: 1,
        alignItems: 'center',
    },
    top: {
        top: 10,
    },
});

export default styles;