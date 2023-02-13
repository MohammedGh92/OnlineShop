import React, {Component} from 'react';
import {View,Dimensions,Text} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from './Utils/PixelNormalization';
const {width: ScreenWidth,height: ScreenHeight,} = Dimensions.get('window');
const GLOBAL = require('./Globals');

const AppText = (props) => {
    return (
      <View>
        <Text style={{marginTop:heightPixel(props.marginTop?props.marginTop:0),textAlign:'center',
        color:props.color?props.color:GLOBAL.Color.c3,
        fontFamily:props.fontFamily?props.fontFamily:"Montserrat-Bold",
        fontSize:fontPixel(props.size?props.size:14)}}>
          {props.text?props.text:'insert Text'}
        </Text>
      </View>
    );
}

export default AppText;
