import React from 'react';
import Home from './Screens/Home/Home';
import Welcome from './Screens/Welcome/Welcome';
import Login from './Screens/Auth/Login/Login';
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
    background: GLOBAL.Color.white,
  },
};

  export default function MyStack() {
    return (
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
