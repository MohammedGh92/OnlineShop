
import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {heightPixel} from '../../Common/Utils/PixelNormalization';
const {AppImage} = require('../../Common/');
import Swiper from 'react-native-swiper';

  const Photos = (props) => {

function ImgItem(props){
  return(
    <AppImage source={props.source} resizeMode={'cover'} width={350} height={220}/>
  );
}

    return (
      <View style={{height:heightPixel(230),width:'110%'}}>
        <Swiper autoplay>
            <View><ImgItem source={require('../../MockData/SamplePhotos/Product1-1.png')}/></View>
            <View><ImgItem source={require('../../MockData/SamplePhotos/Product1-2.png')}/></View>
            <View><ImgItem source={require('../../MockData/SamplePhotos/Product1-3.png')}/></View>
        </Swiper>
      </View>
    );
}

export default Photos;
