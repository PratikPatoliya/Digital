import axios from "axios";
import { GET_USERGETDATA, GET_USERGETDATA_ERROR, SET_BPOST_STATE, SET_USER_ERROR } from "../types/BusinessData.type";
import BASE_URL from "../../config/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
const api = `${BASE_URL}/business`;

export const setUserData = userData => {
    // console.log("setUserDatasetUserData",userData);
    return {
        type: SET_BPOST_STATE,
        payload: userData
    }
}

const setUserError = userError => {
    return {
        type: SET_USER_ERROR,
        payload: userError
    }
}

const getUserData = getuserdata => {
    console.log("getuserdatagetuserdata", getuserdata);
    return {
        type: GET_USERGETDATA,
        payload: getuserdata,
    }
}

const getUserError = getusererror => {
    return {
        type: GET_USERGETDATA_ERROR,
        payload: getusererror,
    }
}

export const Bussiness = (Data) => {
    console.log("DataDataDataData", Data);
    return dispatch => {
        return axios
            .post(api, Data, {
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                dispatch(setUserData(res))
                // return true
            }
            ).catch(err => {
                dispatch(setUserError(err))
            }
            )
    }
}

export const UBusiness = (Data) => {
    // console.log("UpdateBusinessUpdateBusiness", Data);
    return dispatch => {
        return axios
            .put(`${api}/${Data._id}`, Data, {
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                },
            }).then(async (res) => {
                console.log("==================res",res.data);
                // await AsyncStorage.setItem('businessData', JSON.stringify(res.data));
                dispatch(setUserData(res.data.data))
            }
            ).catch(err => {
                dispatch(setUserError(err))
            }
            )
        }
}

export const GetBussinessData = (id) => {
    // console.log("******************************++++", id);
    return dispatch => {
        return axios
        .get(api)
        .then(async res => {
            let newArray = res.data.filter((item) => item.userId == id)
            // console.log("GetBussinessDataGetBussinessDataGetBussinessDataGetBussinessData",newArray);
            // await AsyncStorage.setItem('businessData', JSON.stringify(res.data.data));
            dispatch(getUserData(newArray))
            })
            .catch(err => {
                dispatch(getUserError(err))
            })
    }
}