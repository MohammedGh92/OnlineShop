import React from 'react';
import {FlatList} from 'react-native';
const GLOBAL = require('./Globals');
import {heightPixel,widthPixel} from './Utils/PixelNormalization';

const AppFlatList = (props) => {
    return (
      props.horizontal?
      (<FlatList
        {...props}
        horizontal={true}
        data={props.data}
        renderItem={props.renderItem}
        keyExtractor={(item) => item.id}
      />):
(props.numColumns==1?
      <FlatList
        {...props}
        contentContainerStyle={{alignItems:'center'}}
        style={[{height:heightPixel(700),width:'100%'},{...props.style}]}
        numColumns={1}
        data={props.data}
        renderItem={props.renderItem}
      />
      :
      <FlatList
        style={[{height:heightPixel(700),width:widthPixel(320)},{...props.style}]}
        {...props}
        numColumns={props.numColumns}
        columnWrapperStyle={{justifyContent:'space-between'}}
        data={props.data}
        renderItem={props.renderItem}
      />)
    );
};

export default AppFlatList;
