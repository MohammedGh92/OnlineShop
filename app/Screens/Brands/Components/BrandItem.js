import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {heightPixel} from '../../Common/Utils/PixelNormalization';
const {AppImage} = require('../../Common/');

  const BrandItem = (props) => {
    return (
      <View style={{margin:heightPixel(5),width:'45%'}}>
        <AppImage width={200} height={120}/>
      </View>
    );
}

export default BrandItem;
