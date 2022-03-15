import { SET_LOGIN_STATE } from './actionTypes';
import { Alert } from 'react-native';

const LoginUrl = 'https://backend-banner-data.herokuapp.com/connect';

// this is what our action should look like which dispatches the "payload" to reducer

export const login = (loginInput) => {
    debugger
    const { mobile_number } = loginInput;
    return (dispatch) => {  // don't forget to use dispatch here!
        return fetch(LoginUrl, {
            method: 'POST',
            headers: {  // these could be different for your API call
                Accept: 'application/json',
                'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInput),
      })
        .then((response) => response.json())
        .then((json) => {
            debugger
            if (json) { // response success checking logic could differ
                dispatch(setLoginState({ ...json,userId:mobile_number })); // our action is called here
            } else {
                Alert.alert('Login Failed', 'Username or Password is incorrect');
            }
        })
        .catch((err) => {
            Alert.alert('Login Failed', 'Some error occured, please retry');
            console.log(err);
        });
    };
};
const setLoginState = (loginData) => {
    debugger
  return {
    type: SET_LOGIN_STATE,
    payload: loginData,
  };
};