/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import React from 'react';
import Header2 from '../components/Header2';
import colors from '../utils/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EditBusiness = ({ navigation }) => {
    return (
        <View >
            <Header2 inamel="chevron-back-outline" title="Edit Business" isBack={() => navigation.goBack()} />
            <View style={{ backgroundColor: 'black', width, height, padding: 20 }}>
                <ScrollView>

                    <View style={styles.fieldSet1}>
                        <Text style={styles.legend1}>
                            {' '}
                            Enter Company Name{' '}
                        </Text>
                        <TextInput style={styles.textbox} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.viewtext}>+91</Text>
                        <View style={styles.fieldSet1}>
                            <Text style={styles.legend1}>
                                {' '}
                                Mobile Number{' '}
                            </Text>
                            <TextInput style={styles.textbox} />
                        </View>
                    </View>
                    <View style={styles.fieldSet1}>
                        <Text style={styles.legend1}>
                            {' '}
                            Enter Second Mobile Number (Optional){' '}
                        </Text>
                        <TextInput style={styles.textbox} />
                    </View>
                    <View style={styles.fieldSet1}>
                        <Text style={styles.legend1}>
                            {' '}
                            Enter Company Email Address{' '}
                        </Text>
                        <TextInput style={styles.textbox} />
                    </View>
                    <View style={styles.fieldSet1}>
                        <Text style={styles.legend1}>
                            {' '}
                            Enter Company Website (Optional){' '}
                        </Text>
                        <TextInput style={styles.textbox} />
                    </View>
                    <View style={styles.fieldSet1}>
                        <Text style={styles.legend1}>
                            {' '}
                            Enter Company Address{' '}
                        </Text>
                        <TextInput style={styles.adresstextbox} multiline={true} numberOfLines={2} />
                    </View>
                    <View style={styles.fieldSet1}>
                        <Text style={styles.legend1}>
                            {' '}
                            Company Description (Optional){' '}
                        </Text>
                        <TextInput style={styles.textbox} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default EditBusiness;

const styles = StyleSheet.create({
    fieldSet1: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: 20,
        width: width * 0.85,
        alignSelf: 'center',
    },
    legend1: {
        position: 'absolute',
        fontSize: 12,
        top: -12,
        // alignSelf: 'center',
        marginLeft: 10,
        fontWeight: '500',
        backgroundColor: 'black',
        color: '#fff',
    },
    textbox: {
        color: colors.white,
        // height: Platform.OS === 'ios' ? 45 : 45,
        borderRadius: 5,
        height: height * 0.05,
        // textAlign: 'center',
        marginLeft: 15,
        fontSize: 16,
    },
    adresstextbox: {
        color: colors.white,
        borderRadius: 5,
        height: height * 0.1,
        marginLeft: 15,
        fontSize: 16,
    },
    viewtext: {
        fontSize: 15,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: colors.black,
        color: colors.white,
        marginRight: 10,
        borderColor: colors.white,
        borderWidth: 2,
        height: height * 0.05,
        top: 22,
        width: width * 0.10,
    },
});
