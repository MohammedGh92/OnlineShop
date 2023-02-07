import React, {Component} from 'react';
import {View,Dimensions,Image} from 'react-native';
const {width: ScreenWidth,height: ScreenHeight,} = Dimensions.get('window');
const GLOBAL = require('./Globals');

class AppImage extends React.Component{

  render() {
    const props = this.props;
    return (
      <Image style={{alignSelf:'center',width:ScreenWidth*(props.width?props.width:1),height:'100%'}}
       resizeMode={'contain'} source={props.source?props.source:require('../../Assets/Welcome.png')}/>
    );
  }
}

export default AppImage;
