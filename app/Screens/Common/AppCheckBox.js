import React, {Component} from 'react';
import {View,Dimensions,Text,TouchableOpacity,StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const GLOBAL = require('./Globals');
import {normalize} from './Utils/PixelNormalization';

const AppCheckBox = (props) => {
    return (
        <View style={{borderWidth:normalize(4),borderColor:GLOBAL.Color.c3,width:'4.5%',height:normalize(20),justifyContent:'center',alignItems:'center'}}>
          <View style={{backgroundColor:GLOBAL.Color.c3,width:'60%',height:'60%'}}/>
        </View>
    );
};

export default AppCheckBox;