import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppSearchBar,AppFlatList,AppBottomBar} from '../Common/';
const GLOBAL = require('../Common/Globals');
import SubSectionItem from './Components/SubSectionItem';
import Data from '../MockData/data/';

class SubSections extends React.Component{

  render() {
    //T,NTBD, Data.Sections[0].subSections,Data.Sections[0].name
    return (
        <View style={{flex:1,alignItems:'center'}}>
          <AppSearchBar/>
          <AppFlatList numColumns={2} data={Data.Sections[0].subSections} renderItem={({item})=> <SubSectionItem item={item}/>}/>
          <AppBottomBar choosed={1}/>
        </View>
    );
  }
}

export default SubSections;
