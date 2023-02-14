import React from 'react';
import {View,Text} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from './Utils/PixelNormalization';
const GLOBAL = require('./Globals');

const AppText = (props) => {
    return (
      <View>
        <Text style={{textDecorationLine: props.crossed?'line-through':'none',textDecorationStyle:'solid',width:props.width?widthPixel(props.width):'auto',marginTop:heightPixel(props.marginTop?props.marginTop:0),textAlign:props.textAlign?props.textAlign:'center',
        color:props.color?props.color:GLOBAL.Color.c3,
        fontFamily:props.fontFamily?props.fontFamily:"Montserrat-Bold",
        fontSize:fontPixel(props.size?props.size:14)}}>
          {props.text?props.text:'insert Text'}
        </Text>
      </View>
    );
}

export default AppText;
