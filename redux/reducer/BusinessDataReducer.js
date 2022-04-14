import { GET_USERGETDATA, GET_USERGETDATA_ERROR, SET_BPOST_STATE, SET_USER_ERROR } from "../types/BusinessData.type";

const initialState = {
    setUserError: '',
    getUserError: '',
    userData: null,
    userGetData:null,
};

export const BusinessDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BPOST_STATE:
            // console.log("action.payloadaction.payload",action);
            return {
                ...state,
                userData: action.payload,
            };
        case GET_USERGETDATA:
        return{
            ...state,
            userGetData:action.payload,
        }
        case SET_USER_ERROR:
            return {
                ...state,
                setUserError: action.payload,
            }
        case GET_USERGETDATA_ERROR:
            return{
                ...state,
                getUserError:action.payload,
            }
        default:
            return state
    }
}
