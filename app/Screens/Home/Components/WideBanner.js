import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {widthPixel,heightPixel} from '../../Common/Utils/PixelNormalization';
const {AppImage} = require('../../Common/');

  const WideBanner = (props) => {

    return (
      <View style={{width:widthPixel(350),height:heightPixel(90)}}>
        <AppImage source={require('./SamplePhotos/WideBanner1-1.png')} width={350} height={90}/>
      </View>
    );
}

export default WideBanner;
