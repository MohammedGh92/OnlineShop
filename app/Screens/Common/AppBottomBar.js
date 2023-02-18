import React from 'react';
import {View,TouchableOpacity} from 'react-native';
const GLOBAL = require('./Globals');
import {normalize,widthPixel,heightPixel} from './Utils/PixelNormalization';
import {AppText,AppIcon} from './';

const AppBottomBar = (props) => {

function Item(props){

const{
  name,
  iconName,
  choosed
} = props;

  return(
    <View style={{width:'20%',height:'50%',alignItems:'center',justifyContent:'center'}}>
      <AppIcon name={iconName} size={30} color={choosed?GLOBAL.Color.c1:GLOBAL.Color.darkGrey}/>
      <AppText text={name} color={choosed?GLOBAL.Color.c1:GLOBAL.Color.darkGrey} size={10}/>
    </View>
  );
}

    return (
      <View style={{borderTopWidth:1,borderTopColor:'#A3A3A3',
      width:'100%',height:heightPixel(66), alignItems:'center',backgroundColor:'#ECECEC',flexDirection:'row'}}>
        <Item choosed={props.choosed==0} name={'Home'} iconName={'home'}/>
        <Item choosed={props.choosed==1} name={'Sections'} iconName={'format-list-bulleted'}/>
        <Item choosed={props.choosed==2} name={'Brands'} iconName={'podium'}/>
        <Item choosed={props.choosed==3} name={'Cart'} iconName={'cart'}/>
        <Item choosed={props.choosed==4} name={'My Profile'} iconName={'account'}/>
      </View>
    );
};
export default AppBottomBar;
