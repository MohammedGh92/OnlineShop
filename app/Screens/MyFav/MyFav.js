import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList} from '../Common/';
const GLOBAL = require('../Common/Globals');
import FavItem from './Components/FavItem';
import Data from './data';

class MyFav extends React.Component{

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <AppTopBar title={'Brands'}/>
        <AppFlatList numColumns={1} data={Data} renderItem={({item})=> <FavItem item={item}/>}/>
      </View>
    );
  }
}

export default MyFav;