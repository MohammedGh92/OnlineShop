import React, {Component} from 'react';
import {View,Dimensions,Image} from 'react-native';
const {width: ScreenWidth,height: ScreenHeight} = Dimensions.get('window');
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';

const AppRoundedImage = (props) => {
    return (
      <Image style={{
      width:widthPixel(90),height:heightPixel(100),
      borderRadius:normalize(100)}} resizeMode={'cover'}
       source={props.source?props.source:require('../../Assets/profile.png')}/>
    );
}

export default AppRoundedImage;
