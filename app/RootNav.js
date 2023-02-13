import React from 'react';
import Home from './Screens/Home/Home';
import Welcome from './Screens/Welcome/Welcome';
import Login from './Screens/Auth/Login';
import Register from './Screens/Auth/Register';
import ForgetPass from './Screens/Auth/ForgetPass';
import NoInternet from './Screens/NoInternet/NoInternet';
import Profile from './Screens/Profile/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {StyleSheet, Dimensions} from 'react-native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
import {
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
const GLOBAL = require('./Screens/Common/Globals');

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: GLOBAL.Color.background,
  },
};

  export default function MyStack() {
    return (
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="ForgetPass" component={ForgetPass}/>
        <Stack.Screen name="NoInternet" component={NoInternet}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
