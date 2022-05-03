import React from 'react';
import {Text, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import Lable from '../utils/Lable';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Privacy_Policy from '../screen/Privacy_Policy';
import Terms_conditions from '../screen/Terms_conditions';
import EditBusiness from '../screen/EditBusiness';
import CreateBusinesscategory from '../screen/CreateBusinesscategory';
import Demo from '../screen/Demo';
import UpdateBusiness from '../screen/UpdateBusiness';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Frame"
        component={Frame}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Viewall"
        component={Viewall}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function GreetingsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Greetings1"
        component={Greetings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Frame"
        component={Frame}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Viewall"
        component={Viewall}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function DownlodsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Downlods1"
        component={Downloads}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function BusinessStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Business"
        component={Business}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditBusiness"
        component={EditBusiness}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateBusinesscategory"
        component={CreateBusinesscategory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateBusiness"
        component={UpdateBusiness}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function AccountStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account1"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Termsconditions"
        component={Terms_conditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Privatepolicy"
        component={Privacy_Policy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={Contactus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editprofile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Demo"
        component={Demo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarLabel: ({focused, color}) => {
          let label;
          switch (route.name) {
            case 'Home':
              return (label = focused ? (
                <Text style={[{color}, styles.lable1]}>{Lable.Home}</Text>
              ) : (
                <Text style={[{color}, styles.lable2]}>{Lable.Home}</Text>
              ));
            case 'Greetings':
              return (label = focused ? (
                <Text style={[{color}, styles.lable1]}>{Lable.Greetings}</Text>
              ) : (
                <Text style={[{color}, styles.lable2]}>{Lable.Greetings}</Text>
              ));
            case 'Downlods':
              return (label = focused ? (
                <Text style={[{color}, styles.lable1]}>{Lable.Downlodes}</Text>
              ) : (
                <Text style={[{color}, styles.lable2]}>{Lable.Downlodes}</Text>
              ));
            case 'Business':
              return (label = focused ? (
                <Text style={[{color}, styles.lable1]}>{Lable.Business}</Text>
              ) : (
                <Text style={[{color}, styles.lable2]}>{Lable.Business}</Text>
              ));
            case 'Account':
              return (label = focused ? (
                <Text style={[{color}, styles.lable1]}>{Lable.Account}</Text>
              ) : (
                <Text style={[{color}, styles.lable2]}>{Lable.Account}</Text>
              ));
          }
          return label;
        },
        tabBarStyle: {height: Platform.OS === 'ios' ? 100 : 65},
        headerShown: false,
      })}
      tabBarOptions={{
        activeBackgroundColor: colors.black,
        inactiveBackgroundColor: colors.black,
        activeTintColor: colors.yellow,
        inactiveTintColor: colors.white,
        iconStyle: {top: Platform.OS === 'ios' ? 10 : 5},
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            height: Platform.OS === 'ios' ? 100 : 65,
          },
          headerShown: false,
          tabBarVisible: true,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="home-outline" size={23} style={{color: color}} />
            ) : (
              <Icon name="home-outline" size={20} style={{color: color}} />
            ),
        })}
      />
      <Tab.Screen
        name="Greetings"
        component={GreetingsStackScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibilityGreeting(route),
            height: Platform.OS === 'ios' ? 100 : 65,
          },
          tabBarVisible: true,
          headerShown: false,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="layers-outline" size={23} style={{color: color}} />
            ) : (
              <Icon name="layers-outline" size={20} style={{color: color}} />
            ),
        })}
      />
      <Tab.Screen
        name="Downlods"
        component={DownlodsStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="download-outline" size={23} style={{color: color}} />
            ) : (
              <Icon name="download-outline" size={20} style={{color: color}} />
            ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={BusinessStackScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibilityBusiness(route),
            height: Platform.OS === 'ios' ? 100 : 65,
          },
          tabBarVisible: true,
          headerShown: false,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="briefcase-outline" size={23} style={{color: color}} />
            ) : (
              <Icon name="briefcase-outline" size={20} style={{color: color}} />
            ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibilityAccount(route),
            height: Platform.OS === 'ios' ? 100 : 65,
          },
          tabBarVisible: true,
          headerShown: false,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="person-outline" size={23} style={{color: color}} />
            ) : (
              <Icon name="person-outline" size={20} style={{color: color}} />
            ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home1';
  if (routeName == 'Frame') {
    return 'none';
  } else if (routeName == 'Viewall') {
    return 'none';
  }
  return 'flex';
};
const getTabBarVisibilityGreeting = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Greetings1';
  if (routeName == 'Frame') {
    return 'none';
  } else if (routeName == 'Viewall') {
    return 'none';
  }
  return 'flex';
};
const getTabBarVisibilityBusiness = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Business';
  if (routeName == 'EditBusiness') {
    return 'none';
  }
  else if (routeName == 'CreateBusinesscategory') {
    return 'none';
  }
  else if (routeName =='UpdateBusiness') {
    return 'none';
  }
  return 'flex';
};
const getTabBarVisibilityAccount = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Account1';
  if (routeName == 'ContactUs') {
    return 'none';
  } else if (routeName == 'Privatepolicy') {
    return 'none';
  } else if (routeName == 'Termsconditions') {
    return 'none';
  } else if (routeName == 'Editprofile') {
    return 'none';
  }
  return 'flex';
};

export default AppStack;
