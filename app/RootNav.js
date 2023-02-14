import React from 'react';
import Home from './Screens/Home/Home';
import Welcome from './Screens/Welcome/Welcome';
import Login from './Screens/Auth/Login';
import Register from './Screens/Auth/Register';
import ForgetPass from './Screens/Auth/ForgetPass';
import NoInternet from './Screens/NoInternet/NoInternet';
import Profile from './Screens/Profile/Profile';
import Shipping from './Screens/Shipping/Shipping';
import About from './Screens/About/About';
import Brands from './Screens/Brands/Brands';
import MyFav from './Screens/MyFav/MyFav';
import { createStackNavigator } from '@react-navigation/stack';

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
        <Stack.Screen name="MyFav" component={MyFav}/>
        <Stack.Screen name="Brands" component={Brands}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Shipping" component={Shipping}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgetPass" component={ForgetPass}/>
        <Stack.Screen name="NoInternet" component={NoInternet}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
