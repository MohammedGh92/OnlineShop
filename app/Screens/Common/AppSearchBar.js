import React from 'react';
import {View,TouchableOpacity} from 'react-native';
const GLOBAL = require('./Globals');
import {normalize,widthPixel,heightPixel} from './Utils/PixelNormalization';
import {AppText,AppIcon,AppTextInput} from './';

const AppSearchBar = (props) => {
    return (
      <View style={{width:'100%',height:heightPixel(80), backgroundColor:'red',
      flexDirection:'row',alignItems:'center',backgroundColor:GLOBAL.Color.c1}}>
        <TouchableOpacity style={{margin:normalize(10)}}><AppIcon size={38} name={props.leftIcon?props.leftIcon:'menu'}/></TouchableOpacity>
        <AppTextInput placeholder={'Looking for..'} iconSize={30} name={'magnify'} iconColor={GLOBAL.Color.darkGrey} iconBackgroundColor='transparent' borderRadius={12} width={300} />
      </View>
    );
};

export default AppSearchBar;
