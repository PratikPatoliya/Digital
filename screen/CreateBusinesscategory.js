import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import image from '../utils/image';
import styles from '../styles/CreateBusinesscategory';
import { useDispatch, useSelector } from 'react-redux';
import { GetBussinessData } from '../redux/action/BusinessData.action';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CreateBusinesscategory = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        idcall()
    }, [])
    const idcall = async () => {
        const ID = await AsyncStorage.getItem('userId')
        dispatch(GetBussinessData(ID))
    }
    const state = useSelector(state => state?.BusinessDataReducer?.userGetData)
    console.log("statestatestate", state);

    return (
        <View>
            {state && state.map(data =>
                <View style={styles.container}>
                    <View style={styles.wrap}>
                        <View style={styles.firstWidth}>
                            <Image source={{ uri: image.businessImage }} style={styles.image} />
                        </View>
                        <View style={styles.secondWidth}>
                            <Text style={styles.commonColor}>{data.company_Name}</Text>
                            <Text style={styles.commonColor}>{data.mobile_Number}</Text>
                            <Text style={styles.commonColor}>
                                {data.company_Address}
                            </Text>
                        </View>
                        <View style={styles.thirdWidth}>
                            <TouchableOpacity /* onPress={() => navigation.navigate('EditBusiness')} */>
                                <Text style={styles.commonColor}>
                                    <Icon name="edit" size={22} />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
            }
        </View>
    )
}

export default CreateBusinesscategory
