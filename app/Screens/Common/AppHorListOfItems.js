import React from 'react';
import {View,TouchableOpacity} from 'react-native';
const GLOBAL = require('./Globals');
import {heightPixel,widthPixel} from './Utils/PixelNormalization';
const {AppImage,AppText,AppFlatList,AppProductItem} = require('./');

  const AppHorListOfItems = (props) => {
    return (
      <View style={[{alignSelf:'center',marginTop:heightPixel(15),height:heightPixel(350),width:widthPixel(350)},{...props.style}]}>
        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',width:'98%',height:'10%'}}>
          <AppText size={16} color={props.titleColor} text={props.title?props.title:'Most ordered'}/>
          {props.hideShowAll?<View/>:<TouchableOpacity><AppText size={13} color={GLOBAL.Color.c1} text={'Show All'}/></TouchableOpacity>}
        </View>
        <AppFlatList horizontal showsHorizontalScrollIndicator={false} data={props.data} renderItem={({item})=> <AppProductItem item={item}/>}/>
      </View>
    );
}

export default AppHorListOfItems;
