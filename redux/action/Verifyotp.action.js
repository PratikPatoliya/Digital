import axios from 'axios';
import BASE_URL from '../../config/baseUrl';
import { SET_LOADER_START, SET_LOADER_STOP, SET_USER_ERROR, SET_USER_TOKEN, SET_VERIFY_STATE } from '../types/Verifyotp.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
const LoginUrl = `${BASE_URL}/register`;

export const setVerifyState = passworddata => {
    console.log("passworddata",passworddata);
    return {
        type: SET_VERIFY_STATE,
        payload: passworddata
    }
}
export const setUserVerifyState = userToken => {
    return {
        type: SET_USER_TOKEN,
        payload: userToken,
    };
};
export const setErrorState = error => {
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
/* export const setUserData = async (userData) => {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    await AsyncStorage.setItem('userToken', userData.token);
    await AsyncStorage.setItem('userId', userData.userId);
    await AsyncStorage.setItem('phoneNumber', userData.mobile_number);
    return dispatch => {
    // console.log("userDatauserDatauserDatauserDatauserData",userData);
    dispatch(setVerifyState(userData))
    }
} */

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
                if (res?.data?.message) {
                    dispatch(stopLoader())
                    dispatch(setErrorState(res.data.message))
                }
                if (res?.data?.status) {
                    // dispatch(setUserData(res?.data?.data[0]))
                    const userData = res?.data?.data[0]
                    await AsyncStorage.setItem('userData', JSON.stringify(userData));
                    await AsyncStorage.setItem('userToken', userData.token);
                    await AsyncStorage.setItem('userId', userData.userId);
                    await AsyncStorage.setItem('phoneNumber', userData.mobile_number);
                    dispatch(setVerifyState(userData))
                    dispatch(setUserVerifyState(res?.data?.data[0]?.token))
                }
                dispatch(stopLoader())
            })
            .catch(err => {
                // console.log("resresres errrr", err);
                dispatch(setErrorState(err))
                // dispatch(stopLoader())
            });
    };
}