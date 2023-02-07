import React, {Component} from 'react';
import {View,Dimensions,Text} from 'react-native';
import {normalize} from './Utils/PixelNormalization';
const {width: ScreenWidth,height: ScreenHeight,} = Dimensions.get('window');
const GLOBAL = require('./Globals');

class AppText extends React.Component{

  render() {
    const props = this.props;
    return (
      <View style={{
      width:ScreenWidth*(props.width?props.width:1)}}>
        <Text style={{textAlign:'center',color:props.color?props.color:GLOBAL.Color.c3,
        fontFamily:props.fontFamily?props.fontFamily:"Montserrat-Bold",
        fontSize:normalize(props.size?props.size:14)}}>
          {props.text?props.text:'insert Text'}
        </Text>
      </View>
    );
  }
}

export default AppText;
