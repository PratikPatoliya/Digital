/* eslint-disable prettier/prettier */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Splash';
import Login from '../screen/verification/Login';
import Verify from '../screen/verification/Verifyotp';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash}  />
        <Stack.Screen name="login" component={Login}  />
        <Stack.Screen name="verify" component={Verify}  />
    </Stack.Navigator>
  );
}

function Routes() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth}  options={{headerShown: false}} />
        <Stack.Screen name="AppStack" component={AppStack}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
