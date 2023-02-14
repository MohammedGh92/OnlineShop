import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {AppText,LogoAndName,AppImage,AppBTN} from '../Common/';
const GLOBAL = require('../Common/Globals');
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';

class Welcome extends React.Component{

  hola(){
    console.log('hola');
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
          <View style={{marginTop:heightPixel(38),height:heightPixel(100)}}><LogoAndName width={0.65}/></View>
          <View style={{marginTop:heightPixel(7)}}><AppText text="Whatever you need.." size={24}/></View>
          <View style={{marginTop:heightPixel(50),height:heightPixel(255)}}><AppImage source={require('../../Assets/Welcome.png')}/></View>
          <View style={{marginTop:heightPixel(50)}}>
            <AppText text={"is here"} fontFamily={'Montserrat-Bold'} color={GLOBAL.Color.c1} size={29}/>
            <AppText text={"\n High-quality products, on-time delivery, \n massive discounts!"} size={14} fontFamily={'Montserrat-SemiBold'}/>
          </View>
          <View style={{marginTop:heightPixel(65),height:heightPixel(55),width:widthPixel(320),justifyContent:'flex-end',alignItems:'center'}}>
            <AppBTN text={'Next'} onPress={()=>this.hola()}/>
          </View>
      </View>
    );
  }
}

export default Welcome;
