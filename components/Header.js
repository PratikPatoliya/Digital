/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    const { inamel, title, inamer1, inamer2,preasename2,rightname, isBack } = props;
    // console.warn("Header",props);
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
                            <Icon name={inamer2} size={23} style={{ color: colors.white }} />
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
        height: 50,
        backgroundColor: colors.black,
    },
    flexrow: {
        flex: 1,
        flexDirection: 'row',
    },
    flexend: {
        flex: 0.5,
        alignItems: 'flex-end',
        top: 15,
        right: 20,
    },
    flexstart: {
        flex: 0.5,
        alignItems: 'flex-start',
        top: 15,
        left: 10,
    },
    title: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titlefont: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.white,
    },
    iconstyle:{
        color: colors.white,
        right: 15,
    },
});
