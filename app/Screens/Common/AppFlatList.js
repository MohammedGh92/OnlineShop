import React from 'react';
import {FlatList} from 'react-native';
const GLOBAL = require('./Globals');
import {heightPixel,widthPixel} from './Utils/PixelNormalization';

const AppFlatList = (props) => {
    return (

props.numColumns==1?
      <FlatList
        style={{height:heightPixel(700),width:widthPixel(340)}}
        numColumns={1}
        data={props.data}
        renderItem={props.renderItem}
      />
      :
      <FlatList
        style={{height:heightPixel(700),width:widthPixel(320)}}
        numColumns={props.numColumns}
        columnWrapperStyle={{justifyContent:'space-between'}}
        data={props.data}
        renderItem={props.renderItem}
      />
    );
};

export default AppFlatList;
