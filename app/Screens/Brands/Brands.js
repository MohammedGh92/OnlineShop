import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList} from '../Common/';
const GLOBAL = require('../Common/Globals');
import BrandItem from './Components/BrandItem';
import Data from './data';

class Brands extends React.Component{

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <AppTopBar title={'Brands'}/>
        <AppFlatList data={Data} renderItem={({item})=> <BrandItem/>}/>
      </View>
    );
  }
}

export default Brands;
