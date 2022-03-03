/* eslint-disable prettier/prettier */

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Splash';
import Login from '../screen/verification/Login';
import Verify from '../screen/verification/Verifyotp';
import AppStack from './AppStack';


const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
        <Stack.Screen name='login' component={Login} options={{headerShown: false}} />
        <Stack.Screen name='verify' component={Verify} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}


function Routes() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* <Stack.Screen name="Auth" component={Auth}  options={{headerShown: false}} /> */}
        <Stack.Screen name="AppStack" component={AppStack}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;