import React, {Component} from 'react';
import {TouchableOpacity,Dimensions,View,Text,ScrollView} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {AppText,LogoAndName,AppImage,AppBTN,AppTextInput} from '../Common/';
const GLOBAL = require('../Common/Globals');
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';

class Login extends React.Component{

  render() {
    return (
      <ScrollView>
        <View style={{alignItems:'center',height:ScreenHeight*0.9675,width:ScreenWidth}}>
            <LogoAndName/>
            <AppText marginTop={27} text="Welcome back" size={24}/>
            <AppText marginTop={3} text={"Login"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'}/>
            <AppTextInput marginTop={40}/>
            <AppTextInput marginTop={10} name={'lock'} placeholder={'Password'}/>
            <TouchableOpacity style={{marginTop:heightPixel(10)}}><AppText text={"Forget Password?"} color={GLOBAL.Color.darkGrey}
            size={14} fontFamily={'Montserrat-SemiBold'}/>
            </TouchableOpacity>
            <AppBTN text={'Login'} marginTop={45}/>
            <AppBTN text={'Skip'} color={GLOBAL.Color.c3} marginTop={15}/>
            <View style={{marginTop:heightPixel(80),flexDirection:'row'}}>
              <AppText text={"Don’t have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'}/>
              <TouchableOpacity><AppText text={" Sign up"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'}/></TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}


export default Login;
