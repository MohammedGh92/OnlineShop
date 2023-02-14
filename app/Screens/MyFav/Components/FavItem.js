import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {normalize,heightPixel,widthPixel} from '../../Common/Utils/PixelNormalization';
const {AppImage,AppText,AppIcon} = require('../../Common/');

  const FavItem = (props) => {

    const {
      name,
      img,
      date,
      oldPrice,
      newPrice
    } = props.item;

    return (
      <View style={{backgroundColor:GLOBAL.Color.white,
        borderColor:GLOBAL.Color.borderColor,flexDirection:'row',justifyContent:'center',alignItems:'center',
        borderWidth:normalize(2.5),height:heightPixel(100),marginTop:heightPixel(10),width:'100%'}}>
        <View style={{justifyContent:'center',margin:widthPixel(10),alignItems:'center',flex:3}}><AppImage/></View>
        <View style={{flex:6,height:'80%',justifyContent:'space-between'}}>
          <AppText text={name} size={12} color={GLOBAL.Color.darkGrey} textAlign='left'/>
          <AppText crossed text={'$'+oldPrice} size={11} color={GLOBAL.Color.grey} textAlign='left'/>
          <AppText text={'$'+newPrice} size={12} color={GLOBAL.Color.darkGrey} textAlign='left'/>
        </View>
        <View style={{alignItems:'flex-end',padding:widthPixel(5),justifyContent:'space-between',height:'90%',flex:3}}>
          <AppIcon name={'close'} color={GLOBAL.Color.grey} />
          <AppText text={date} size={10} color={GLOBAL.Color.darkGrey} textAlign='left'/>
        </View>
      </View>
    );
}

export default FavItem;
