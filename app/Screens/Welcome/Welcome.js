import React, {Component} from 'react';
import {TouchableOpacity,Dimensions,View,Text} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {AppText,LogoAndName,AppImage,AppBTN} from '../Common/';
const GLOBAL = require('../Common/Globals');

class Welcome extends React.Component{

  hola(){
    console.log('hola');
  }

  render() {
    return (
      <View style={{flexDirection: 'column',flex:1}}>
          <View style={{flex:1}}/>
          <View style={{flex:3}}><LogoAndName width={0.65}/></View>
          <View style={{flex:1}}><AppText text="Whatever you need.." size={24}/></View>
          <View style={{flex:1}}/>
          <View style={{flex:7}}><AppImage source={require('../../Assets/Welcome.png')}/></View>
          <View style={{flex:1}}/>
          <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
            <AppText text={"is here"} fontFamily={'Montserrat-Bold'} color={GLOBAL.Color.c1} size={29}/>
            <AppText text={"\n High-quality products, on-time delivery, \n massive discounts!"} size={14} fontFamily={'Montserrat-SemiBold'}/>
          </View>
          <View style={{flex:2,justifyContent:'flex-end',alignItems:'center'}}><AppBTN text={'Next'} width='80%' height='62%' onPress={()=>this.hola()}/></View>
          <View style={{flex:1}}/>
      </View>
    );
  }
}

export default Welcome;
