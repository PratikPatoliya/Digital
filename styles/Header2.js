/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet, Platform } from "react-native";
import colors from '../utils/colors';
const styles = StyleSheet.create({
    views:{
        height: Platform.OS === 'ios' ? 70 : 50,
        backgroundColor: colors.black,
    },
    flexrow: {
        flex: 1,
        flexDirection: 'row',
    },
    flexend: {
        flex: 1,
        alignItems: 'flex-end',
        top: Platform.OS === 'ios' ? 30 : 15,
        right: Platform.OS === 'ios' ? 40 : 20,
    },
    flexstart: {
        flex:2,
        alignItems: 'flex-start',
        marginRight:50,
        top: Platform.OS === 'ios' ? 35 : 15,
        left: Platform.OS === 'ios' ? 20 : 10,
    },
    titlefont: {
        fontSize: 18,
        fontWeight: 'normal',
        color: colors.white,
    },
    iconstyle:{
        right: Platform.OS === 'ios' ? 10 : 15,
        top : Platform.OS === 'ios' ? 10 : 0,
    },
    iconstyle2:{
        color: colors.white,
        top : Platform.OS === 'ios' ? 10 : 0,
        left: Platform.OS === 'ios' ? 20 : 15,
    },
    righttxt : {
        color:colors.yellow,
        fontSize:20,
    },
});

export default styles;
