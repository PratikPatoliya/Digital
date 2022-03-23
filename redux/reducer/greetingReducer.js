import { GET_GREETING, GET_GREETING_ERROR, GET_GREETING_IMAGE } from "../types/Greeting.type";
const initialState ={
    greetingData : null,
    greetingDataImage: null,
    greetingError: ''
}
export const greetingReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_GREETING:
            console.log("Get_Greeting", action.payload);
            return{
                ...state,
                greetingData:action.payload,
            };
        case GET_GREETING_IMAGE:
            return{
                ...state,
                greetingDataImage:action.payload,
            };
        case GET_GREETING_ERROR:
            return{
                ...state,
                greetingError:action.payload,
            };
        default:
            return state
    }
}