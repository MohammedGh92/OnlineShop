import React, {Component} from 'react';
import {TouchableOpacity,Dimensions,View,Text,ScrollView} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {AppText,LogoAndName,AppImage,AppBTN,AppTextInput,AppCheckBox} from '../Common/';
const GLOBAL = require('../Common/Globals');
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';

class ForgetPass extends React.Component{

  render() {
    return (
        <View style={{alignItems:'center',height:ScreenHeight*0.95,width:ScreenWidth}}>
            <LogoAndName/>
            <AppText marginTop={20} text="Forget password" size={26}/>
            <AppText marginTop={2} text={"Enter your email to get \n an activation message"} size={14}
             color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'}/>
            <AppTextInput marginTop={40} name={'email'} placeholder={'Email'}/>
            <AppBTN marginTop={50} text={'Send'}/>
        </View>
    );
  }
}
export default ForgetPass;
