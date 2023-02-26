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
import MyOrders from './Screens/MyOrders/MyOrders';
import Products from './Screens/Products/Products';
import SearchProducts from './Screens/SearchProducts/SearchProducts';
import ProductDetails from './Screens/ProductDetails/ProductDetails';
import Settings from './Screens/Settings/Settings';
import HelpCenter from './Screens/HelpCenter/HelpCenter';
import NavScreen from './Screens/NavScreen/NavScreen';
import Wallet from './Screens/Wallet/Wallet';
import Sections from './Screens/Sections/Sections';
import SubSections from './Screens/SubSections/SubSections';
import PickLocation from './Screens/PickLocation/PickLocation';
import Cart from './Screens/Cart/Cart';
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
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="PickLocation" component={PickLocation}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Sections" component={Sections}/>
        <Stack.Screen name="SubSections" component={SubSections}/>
        <Stack.Screen name="Brands" component={Brands}/>
        <Stack.Screen name="MyFav" component={MyFav}/>
        <Stack.Screen name="Wallet" component={Wallet}/>
        <Stack.Screen name="NavScreen" component={NavScreen}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="HelpCenter" component={HelpCenter}/>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ProductDetails" component={ProductDetails}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchProducts" component={SearchProducts}/>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="MyOrders" component={MyOrders}/>
        <Stack.Screen name="Shipping" component={Shipping}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgetPass" component={ForgetPass}/>
        <Stack.Screen name="NoInternet" component={NoInternet}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
