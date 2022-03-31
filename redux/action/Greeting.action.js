import BASE_URL from '../../config/baseUrl';
import axios from 'axios';
import { GET_GREETING, GET_GREETING_ERROR, GET_GREETING_IMAGE } from '../types/Greeting.type';
const GreetingData = `${BASE_URL}/greeting`;
const GreetingDataImage = `${BASE_URL}/greeting/image`;


const setGreetingData = greetingData => {
    return {
        type: GET_GREETING,
        payload: greetingData,
    };
};
const setGreetingDataImage = greetingDataImage => {
    return {
        type: GET_GREETING_IMAGE,
        payload: greetingDataImage,
    };
};
const setGreetingDataError = GreetingError => {
    return {
        type: GET_GREETING_ERROR,
        payload: GreetingError,
    };
};

export const greetingApiData = () => {
    return dispatch => {
        return axios
            .get(GreetingData)
            .then(res => {
                // console.log("res greeting", res);
                dispatch(setGreetingData(res.data))
            })
            .catch(err => {
                // console.log("errrrrrr",err);
                dispatch(setGreetingDataError(err.data))
            })
    }
}
export const greetingApiDataImage = () => {
    return dispatch => {
        return axios
            .get(GreetingDataImage)
            .then(res => {
                dispatch(setGreetingDataImage(res.data))
            })
            .catch(err => {
                dispatch(setGreetingDataError(err.data))
            })
    }
}