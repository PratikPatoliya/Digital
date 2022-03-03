/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import colors from "../utils/colors";
const styles = StyleSheet.create({
    homeBackground: {
        backgroundColor: colors.black,
    },
    homeview: {
        marginBottom: 50,
    },
    homefdb: {
        position: 'absolute',
        margin: 16,
        marginBottom: 60,
        right: 0,
        bottom: 0,
        backgroundColor: colors.green,
    },
});

export default styles;
