/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import Lable from '../utils/Lable';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Greetings from '../screen/Greeting';
import Business from '../screen/Business';
import Account from '../screen/Account';
import Downloads from '../screen/Download';
import Contactus from '../screen/Contactus';
import Frame from '../screen/Frame';
import Viewall from '../components/Viewall';
import styles from '../styles/AppStack';
import EditProfile from '../screen/EditProfile';



const Stack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
            <Stack.Screen name="Frame" component={Frame} options={{ headerShown: false}} />
            <Stack.Screen name="Viewall" component={Viewall} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
function GreetingsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Greetings" component={Greetings} options={{ headerShown: false }} />
            <Stack.Screen name="Frame" component={Frame} options={{ headerShown: false }} />
            <Stack.Screen name="Viewall" component={Viewall} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
function DownlodsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Downlods" component={Downloads} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
function BusinessStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Business" component={Business} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
function AccountStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
            <Stack.Screen name="ContactUs" component={Contactus} options={{ headerShown: false }} />
            <Stack.Screen name="Editprofile" component={EditProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();
const AppStack = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
            //     screenOptions={{
            //     tabBarStyle: { height: 65 },
            // }}
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused, color }) => {
                    let label;
                    switch (route.name) {
                        case 'Home':
                            return label = focused ? <Text style={[{ color }, styles.lable1]}>{Lable.Home}</Text> : <Text style={[{ color }, styles.lable2]}>{Lable.Home}</Text>;
                        case 'Greetings':
                            return label = focused ? <Text style={[{ color }, styles.lable1]}>{Lable.Greetings}</Text> : <Text style={[{ color }, styles.lable2]}>{Lable.Greetings}</Text>;
                        case 'Downlods':
                            return label = focused ? <Text style={[{ color }, styles.lable1]}>{Lable.Downlodes}</Text> : <Text style={[{ color }, styles.lable2]}>{Lable.Downlodes}</Text>;
                        case 'Business':
                            return label = focused ? <Text style={[{ color }, styles.lable1]}>{Lable.Business}</Text> : <Text style={[{ color }, styles.lable2]}>{Lable.Business}</Text>;
                        case 'Account':
                            return label = focused ? <Text style={[{ color }, styles.lable1]}>{Lable.Account}</Text> : <Text style={[{ color }, styles.lable2]}>{Lable.Account}</Text>;
                    }
                    return label;
                },
                tabBarStyle: { height: 65 },
            })}

            tabBarOptions={{
                activeBackgroundColor: colors.black,
                inactiveBackgroundColor: colors.black,
                activeTintColor: colors.yellow,
                inactiveTintColor: colors.white,
                iconStyle: { top: 5 },
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false,  tabBarVisible: true, tabBarIcon: (({ color, focused }) => focused ? <Icon name="home-outline" size={23} style={{ color: color }} /> : <Icon name="home-outline" size={20} style={{ color: color }} />) }} />
            <Tab.Screen name="Greetings" component={GreetingsStackScreen} options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="layers-outline" size={23} style={{ color: color }} /> : <Icon name="layers-outline" size={20} style={{ color: color }} />) }} />
            <Tab.Screen name="Downlods" component={DownlodsStackScreen} options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="download-outline" size={23} style={{ color: color }} /> : <Icon name="download-outline" size={20} style={{ color: color }} />) }} />
            <Tab.Screen name="Business" component={BusinessStackScreen} options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="briefcase-outline" size={23} style={{ color: color }} /> : <Icon name="briefcase-outline" size={20} style={{ color: color }} />) }} />
            <Tab.Screen name="Account" component={AccountStackScreen} screenOptions={{tabBarHideOnKeyboard: true}} options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="person-outline" size={23} style={{ color: color }} /> : <Icon name="person-outline" size={20} style={{ color: color }} />) }} />
        </Tab.Navigator>
    );
};

export default AppStack;
