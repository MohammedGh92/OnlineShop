import React, {Component} from 'react';
import {View} from 'react-native';
import {fontPixel,heightPixel,widthPixel,tstOne} from '../Common/Utils/PixelNormalization';
import {AppTopBar,LogoAndName,AppText} from '../Common/';
const GLOBAL = require('../Common/Globals');

class About extends React.Component{

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <AppTopBar title={'About'}/>
        <LogoAndName height={85} marginTop={8}/>
        <AppText marginTop={0} text="About" size={24}/>
        <AppText width={350} textAlign={'left'} marginTop={20} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} size={16} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'}/>
      </View>
    );
  }
}
export default About;
