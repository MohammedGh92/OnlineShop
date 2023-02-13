import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const GLOBAL = require('./Globals');
import {normalize} from './Utils/PixelNormalization';
import {AppIcon} from './';

const AppCircleIcon = (props) => {
    return (
        <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:GLOBAL.Color.c3,
            height:normalize(36.5),width:normalize(36.5),borderRadius:normalize(100)}}>
              <AppIcon borderRadius={normalize(30)} size={normalize(21)} color={GLOBAL.Color.white} name={props.name?props.name:"email"}/>
          </View>
        </View>
    );
}

export default AppCircleIcon;
