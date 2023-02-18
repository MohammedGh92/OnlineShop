import React from 'react';
import {View,TouchableOpacity} from 'react-native';
const GLOBAL = require('./Globals');
import {normalize,widthPixel,heightPixel} from './Utils/PixelNormalization';
import {AppText,AppIcon} from './';

const AppTopBar = (props) => {
    return (
      <View style={{width:'100%',height:heightPixel(66), flexDirection:'row',backgroundColor:GLOBAL.Color.c1}}>
        <View style={{justifyContent:'center',alignItems:'center',flex:2}}>
        <TouchableOpacity><AppIcon size={38} name={props.leftIcon?props.leftIcon:'arrow-left'}/></TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:8}}>
          <AppText text={props.title?props.title:"My Info"} size={18} color={GLOBAL.Color.white} fontFamily={'Montserrat-SemiBold'}/>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:2}}>
        </View>
      </View>
    );
};

export default AppTopBar;
