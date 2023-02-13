import React, {Component} from 'react';
import {View,Dimensions,Image} from 'react-native';
const {width: ScreenWidth,height: ScreenHeight} = Dimensions.get('window');
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';

const AppImage = (props) => {
    return (
      <Image style={{alignSelf:'center',
      marginTop:heightPixel(props.marginTop?props.marginTop:0),
      width:widthPixel(props.width?props.width:320),
      height: heightPixel(props.height?props.height:55)}}
       resizeMode={'contain'} source={props.source?props.source:require('../../Assets/Welcome.png')}/>
    );
}

export default AppImage;
