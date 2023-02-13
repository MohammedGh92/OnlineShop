import React, {Component} from 'react';
import {View,Dimensions,Text,TouchableOpacity,StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const GLOBAL = require('./Globals');
import {normalize} from './Utils/PixelNormalization';
import {AppText,AppIcon} from './';

const AppTopBar = (props) => {
    return (
      <View style={{flexDirection:'row',flex:20,backgroundColor:GLOBAL.Color.c1}}>
        <View style={{justifyContent:'center',alignItems:'center',flex:2}}>
        <TouchableOpacity><AppIcon size={38} name={'arrow-left'}/></TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:8}}>
          <AppText text={"My Info"} size={18} color={GLOBAL.Color.white} fontFamily={'Montserrat-SemiBold'}/>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:2}}>
        </View>
      </View>

    );
};

export default AppTopBar;
