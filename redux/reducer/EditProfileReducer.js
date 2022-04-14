import { GET_USER_ERROR, GET_USER_PROFILE, SET_EPOST_STATE, SET_USER_ERROR } from "../types/EditProfile.types";

const initialState = {
    setUserError: '',
    userData: null,
    getData:null,
    getUserError:'',

}

export const EditProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EPOST_STATE:
            return {
                ...state,
                userData: action.payload,
            }
        case SET_USER_ERROR:
            return {
                ...state,
                setUserError: action.payload,
            }
        // case GET_USER_PROFILE:
        //     return{
        //         ...state,
        //         getData:action.payload,
        //     }
        // case GET_USER_ERROR:
        //     return{
        //         ...state,
        //         getUserError:action.payload,
        //     }
        default:
            return state
    }
}
