import React, {Component} from 'react';
import {View,Text,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';
import {AppCircleIcon} from './';

const AppTextInput = (props) => {
    return (
      <View style={{marginTop:heightPixel(props.marginTop?props.marginTop:0),flexDirection:'row',
        width:widthPixel(props.width?props.width:320),
        height: heightPixel(props.height?props.height:55),borderRadius: normalize(50),
        borderColor:GLOBAL.Color.borderColor,
        borderWidth:normalize(2.5),
        alignSelf:'center',justifyContent:'center',
        alignItems: 'center',backgroundColor: GLOBAL.Color.white}}>
        <View style={{flex:1}}><AppCircleIcon {...props}/></View>
        <View style={{flex:5}}><TextInput placeholder={props.placeholder?props.placeholder:"Email"}/></View>
      </View>
    );
  }

export default AppTextInput;