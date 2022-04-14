import axios from "axios";
import { GET_USERGETDATA, GET_USERGETDATA_ERROR, SET_BPOST_STATE, SET_USER_ERROR } from "../types/BusinessData.type";
import BASE_URL from "../../config/baseUrl";
const api = `${BASE_URL}/business`;

const setUserData = userData => {
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
    console.log("getuserdatagetuserdata",getuserdata);
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
            }
            ).catch(err => {
                dispatch(setUserError(err))
            }
            )
    }
}

export const GetBussinessData = (id) => {
    console.log("******************************++++",id);
    return dispatch => {
        return axios
            .get(api)
            .then(res => {
                let newArray = res.data.filter((item) => item.userId == id)
                // console.log("GetBussinessDataGetBussinessDataGetBussinessDataGetBussinessData",newArray);
                dispatch(getUserData(newArray))
            })
            .catch(err => {
                dispatch(getUserError(err))
            })
    }
}