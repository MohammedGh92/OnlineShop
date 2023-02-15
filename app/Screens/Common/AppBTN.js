import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';

  const AppBTN = (props) => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={{
        marginTop:heightPixel(props.marginTop?props.marginTop:0),height:heightPixel(props.height?props.height:52)
        ,width:widthPixel(props.width?props.width:300),
        borderColor: props.borderColor?props.borderColor:'transparent'
        ,borderWidth: normalize(props.borderWidth?props.borderWidth:0)
        ,borderRadius: normalize(props.borderRadius?props.borderRadius:50),
        alignSelf:'center',justifyContent:'center',
        alignItems: 'center',backgroundColor: props.color?props.color:GLOBAL.Color.c1}} onPress={props.onPress}>
        <Text style={{textAlign:'center',color:props.textColor?props.textColor:GLOBAL.Color.white,
        fontFamily:props.fontFamily?props.fontFamily:"Montserrat-Bold",
        fontSize: normalize(props.textSize?props.textSize:16)}}> {props.text?props.text:'Press Here'} </Text>
      </TouchableOpacity>
    );
}

export default AppBTN;
