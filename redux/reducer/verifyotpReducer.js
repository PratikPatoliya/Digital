import { SET_LOADER_START, SET_LOADER_STOP, SET_USER_ERROR, SET_USER_TOKEN, SET_VERIFY_STATE } from "../types/Verifyotp.type";

const initialState ={
    userToken: '',
    setUserError: null,
    userData:null,
    isLoader: false,
}

export const verifyotpReducer =(state = initialState ,action) => {
   // console.log('action.payload', action.payload)
    switch (action.type) {
        case SET_LOADER_START:
      return {
        ...state,
        isLoader: true
      };
    case SET_LOADER_STOP:
      return {
        ...state,
        isLoader: false
      };
        case SET_VERIFY_STATE:
            return{
                ...state,
                userData:action.payload,
            }
        case SET_USER_TOKEN:
            return{
                ...state,
                userToken:action.payload,
            }            
        case SET_USER_ERROR:
            return{
                ...state,
                setUserError:action.payload,
            }
        default:
        return state
    
    }
}
