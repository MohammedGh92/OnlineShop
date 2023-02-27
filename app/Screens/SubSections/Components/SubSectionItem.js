import React from 'react';
import {View,ImageBackground} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {heightPixel,widthPixel,normalize} from '../../Common/Utils/PixelNormalization';
const {AppText} = require('../../Common/');

  const SubSectionItem = (props) => {
    const {
      name,
      image
    } = props.item;
    return (
      <View style={{margin:heightPixel(7),height:heightPixel(145),width:'43%'}}>
            <ImageBackground source={image} imageStyle={{borderRadius: normalize(30)}} resizeMode={'cover'}
              style={{width:'100%',height:'100%'}} source={props.item.image}>
              <View style={{alignItems:'center',justifyContent:'center',borderRadius: normalize(30),backgroundColor:'rgba(0,0,0,0.45)',flex:1}}>
                <AppText color={'white'} text={name} size={16}/>
              </View>
            </ImageBackground>
      </View>
    );
}

export default SubSectionItem;
