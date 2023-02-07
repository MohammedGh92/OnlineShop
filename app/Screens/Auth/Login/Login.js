import React, {Component} from 'react';
import {TouchableOpacity,Dimensions,View,Text} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {AppText,LogoAndName,AppImage,AppBTN} from '../../Common/';
import style from './style';
const GLOBAL = require('../../Common/Globals');

class Login extends React.Component{

  render() {
    return (
      <View style={style.container}>
      <View style={{flex:4}}><LogoAndName width={0.675}/></View>
      <AppText text={"Whatever you need.."} size={26}/>
      <AppText text={"\n Login"} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-Medium'} size={16}/>
      <View style={{flex:1}}/>
      <View style={{backgroundColor:'red',flex:7}}></View>
      <View style={[style.container,{flex:5}]}>
        <View style={{flex:2}}/>
        <View style={{flex:5}}>
          <AppText text={"High-quality products, on-time delivery"}
          size={16} fontFamily={'Montserrat-SemiBold'}/>
        </View>
        <View style={{flex:6}}/>
      </View>
      </View>
    );
  }
}



export default Login;
