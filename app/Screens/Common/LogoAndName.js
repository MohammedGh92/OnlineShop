import React, {Component} from 'react';
import {Dimensions,Image} from 'react-native';
const {width: ScreenWidth,height: ScreenHeight,} = Dimensions.get('window');
import {heightPixel,widthPixel} from './Utils/PixelNormalization';

const LogoAndName = (props) => {
    return (
      <Image style={{marginTop:heightPixel(38),height:heightPixel(100),
      width:widthPixel(props.width?props.width:255)}}
       resizeMode={'contain'} source={require('../../Assets/LogoAndName.png')}/>
    );
}

export default LogoAndName;
