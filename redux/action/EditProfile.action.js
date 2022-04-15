import axios from "axios"
import { GET_USER_ERROR, GET_USER_PROFILE, SET_EPOST_STATE, SET_USER_ERROR } from "../types/EditProfile.types"
import BASE_URL from "../../config/baseUrl";
import { setVerifyState } from "./Verifyotp.action";
import AsyncStorage from "@react-native-async-storage/async-storage";
const api = `${BASE_URL}/register`;

const EditData = editData => {
    return {
        type: SET_EPOST_STATE,
        payload: editData
    }
}
const EditDataError = editDataError => {
    return {
        type: SET_USER_ERROR,
        payload: editDataError
    }
}
// const GetData = getData =>{
//     return{
//         type:GET_USER_PROFILE,
//         payload:getData,
//     }
// }
// const GetDataError = getDataError => {
//     return{
//         type:GET_USER_ERROR,
//         payload:getDataError,
//     }
// }

export const EditProfileData = (editData) => {
    console.log("editDataeditDataeditData",editData);
    return dispatch => {
        return axios
            .put(`${api}/${editData.id}`, editData, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(async(res) => {
                console.log("EditProfileData",res);
                await AsyncStorage.setItem('userData', JSON.stringify(res.data));
                dispatch(EditData(res.data)) 
                dispatch(setVerifyState(res.data))
            }).catch(err => {
                dispatch(EditDataError(err))
            })
    }
}

// export const GetProfileData = (id) =>{
//     console.log("GetProfileData++++++Idd",id);
//     return dispatch =>{

//         return axios
//         .get(api)
//         .then(res =>{
//             const gData = res.data.filter((item) => item._id == id)
//             console.log("GetProfileData",gData);
//             dispatch(GetData(res.data))
//         })
//         .catch(err =>{
    
//                 dispatch(GetDataError(err))
//         })
//     }
// }