import React, {Component} from 'react';
import {View,Dimensions,Text,TouchableOpacity} from 'react-native';
const GLOBAL = require('./Globals');
import {normalize} from './Utils/PixelNormalization';

class AppBTN extends React.Component{

  render() {
    const props = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7} style={{width:props.width?props.width:'100%',
        height:props.height?props.height:'100%',borderRadius: normalize(25),
        alignSelf:'center',justifyContent:'center',
        alignItems: 'center',backgroundColor: GLOBAL.Color.c1}} onPress={props.onPress}>
        <Text style={{textAlign:'center',color:props.textColor?props.textColor:GLOBAL.Color.white,
        fontFamily:props.fontFamily?props.fontFamily:"Montserrat-Bold",
        fontSize: normalize(props.textSize?props.textSize:16)}}> {props.text?props.text:'Press Here'} </Text>
      </TouchableOpacity>
    );
  }
}

export default AppBTN;
