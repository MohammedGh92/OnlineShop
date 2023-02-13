import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet,Dimensions,View,Text,ScrollView,PixelRatio} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {AppText,AppImage,AppRoundedImage,AppCircleIcon,AppBTN,AppTextInput,AppBar,AppIcon,AppTopBar} from '../Common/';
const GLOBAL = require('../Common/Globals');
import Icon from 'react-native-vector-icons/Entypo';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';

class Profile extends React.Component{

  render() {
    return (
      <ScrollView>
        <View style={{alignItems:'center',justifyContent:'center',
        flexDirection:'column',
        height:heightPixel(787),width:ScreenWidth}}>

        <View style={{flex:2}}>
          <AppTopBar/>
          <View style={{flex:1}}/>
        </View>
        <View style={{justifyContent:'center',backgroundColor:'yellow',flex:5}}>
          <AppRoundedImage/>
        </View>
        <View style={{backgroundColor:'green',flex:8}}/>
        <View style={{backgroundColor:'red',flex:6}}/>
        <View style={{backgroundColor:'blue',flex:2}}/>

        <View style={{height:heightPixel(100),width:widthPixel(100),backgroundColor:'red'}}/>
        <View style={{height:heightPixel(100),width:widthPixel(100),backgroundColor:'green'}}/>
        <View style={{height:heightPixel(100),width:widthPixel(100),backgroundColor:'red'}}/>

        </View>
      </ScrollView>
    );
  }
}



export default Profile;
