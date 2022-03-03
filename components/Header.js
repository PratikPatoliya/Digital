/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    const { inamel, title, inamer1, inamer2,preasename2,rightname, isBack } = props;
    return (
        <View style={styles.views}>

            <View style={styles.flexrow}>
                <View style={styles.flexstart}>
                    {/* left icon back */}
                    <TouchableOpacity onPress={isBack}>
                        <Icon name={inamel} size={23} style={{ color: colors.white }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    {/* Text title */}
                    <Text style={styles.titlefont}>{title}</Text>
                </View>
                <View style={styles.flexend}>
                    <View style={styles.flexrow}>
                        {/* Right side Icon */}
                        <TouchableOpacity>
                            <Icon name={inamer1} size={23} style={styles.iconstyle} />
                            <Text style={{color:colors.yellow,fontSize:20}}>{rightname}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={preasename2}>
                            <Icon name={inamer2} size={23} style={styles.iconstyle2} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    views:{
        height: Platform.OS === 'ios' ? 100 : 50,
        backgroundColor: colors.black,
    },
    flexrow: {
        flex: 1,
        flexDirection: 'row',
    },
    flexend: {
        flex: 0.5,
        alignItems: 'flex-end',
        top: Platform.OS === 'ios' ? 30 : 15,
        right: Platform.OS === 'ios' ? 40 : 20,
    },
    flexstart: {
        flex: 0.5,
        alignItems: 'flex-start',
        top: Platform.OS === 'ios' ? 35 : 15,
        left: Platform.OS === 'ios' ? 20 : 10,
    },
    title: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titlefont: {
        fontSize: 18,
        fontWeight: 'normal',
        color: colors.white,
    },
    iconstyle:{
        color: colors.white,
        right: Platform.OS === 'ios' ? 10 : 15,
        top : Platform.OS === 'ios' ? 10 : 0,
    },
    iconstyle2:{
        color: colors.white,
        top : Platform.OS === 'ios' ? 10 : 0,
        left: Platform.OS === 'ios' ? 20 : 15,
    },
});
