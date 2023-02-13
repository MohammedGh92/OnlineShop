import React, {Component} from 'react';
import {TouchableOpacity,Dimensions,View,Text,ScrollView} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {AppText,LogoAndName,AppImage,AppBTN,AppTextInput,AppCheckBox} from '../Common/';
const GLOBAL = require('../Common/Globals');
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';

class Register extends React.Component{

  render() {
    return (
      <ScrollView>
        <View style={{alignItems:'center',height:ScreenHeight*0.95,width:ScreenWidth}}>
            <LogoAndName/>
            <AppText marginTop={20} text="New account" size={26}/>
            <AppText marginTop={2} text={"Register"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'}/>
            <AppTextInput marginTop={10}/>
            <AppTextInput marginTop={10} name={'cellphone'} placeholder={'Phone'}/>
            <AppTextInput marginTop={10} name={'lock'} placeholder={'Password'}/>
            <AppTextInput marginTop={10} name={'lock'} placeholder={'Password confirmation'}/>
            <View style={{marginTop:heightPixel(15),flexDirection:'row',justifyContent:'center'}}>
              <AppCheckBox/>
              <TouchableOpacity><AppText text={"\t \t I agree to the privacy policy and terms of use"} color={GLOBAL.Color.darkGrey}
              size={12} fontFamily={'Montserrat-SemiBold'}/>
              </TouchableOpacity>
            </View>
            <AppBTN marginTop={40} text={'Register'}/>
            <View style={{marginTop:heightPixel(55),flexDirection:'row'}}>
              <AppText text={"Have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'}/>
              <TouchableOpacity><AppText text={" Sign in"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'}/></TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}
export default Register;
