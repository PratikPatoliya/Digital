import axios from 'axios';
import BASE_URL from '../../config/baseUrl';
import { SET_LOADER_START, SET_LOADER_STOP, SET_USER_ERROR, SET_USER_TOKEN, SET_VERIFY_STATE } from '../types/Verifyotp.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginUrl = `${BASE_URL}/register`;

const setVerifyState = passworddata => {
    return {
        type: SET_VERIFY_STATE,
        payload: passworddata
    }
}
const setUserVerifyState = userToken => {
    return {
        type: SET_USER_TOKEN,
        payload: userToken,
    };
};
const setErrorState = error => {
    return {
        type: SET_USER_ERROR,
        payload: error
    }
}
export const startLoader = () => {
    return {
        type: SET_LOADER_START,
    }
}
export const stopLoader = () => {
    return {
        type: SET_LOADER_STOP,
    }
}

export const verify = (verifyInput) => {
    console.log(verifyInput);
    return dispatch => {
        dispatch(startLoader())
        return axios
        .post(LoginUrl, verifyInput, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(async (res) => {
            console.log("resresres veri", res);
            if (res?.data?.message) {
                dispatch(stopLoader())
                dispatch(setErrorState(res?.data))
            }
            
            if (res?.data?.status) {
                    dispatch(setVerifyState(res?.data))
                    // console.log("token", res?.data?.data[0]?.token);
                    // console.log("userId", res?.data?.data[0]?.mobile_number);                   
                    await AsyncStorage.setItem('userToken', res?.data?.data[0]?.token);
                    await AsyncStorage.setItem('userId', res?.data?.data[0]?.userId);
                    await AsyncStorage.setItem('phoneNumber', res?.data?.data[0]?.mobile_number);
                }
                dispatch(setUserVerifyState(res?.data?.data[0]?.token))
                // dispatch(stopLoader())
            })
            .catch(err => {
                // console.log("resresres errrr", err);
                dispatch(setErrorState(res?.data))
                // dispatch(stopLoader())
            });
        };
    }