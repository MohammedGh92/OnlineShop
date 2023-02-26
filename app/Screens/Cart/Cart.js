import React, {Component} from 'react';
import {View,TextInput,ScrollView,Dimensions} from 'react-native';
const {width: ScreenWidth,height: ScreenHeight,} = Dimensions.get('window');
import {fontPixel,heightPixel,widthPixel,normalize} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList,AppText,AppTextInput,AppBTN} from '../Common/';
const GLOBAL = require('../Common/Globals');
import CartItem from './Components/CartItem';
import Data from '../MockData/data';

class About extends React.Component{

  render() {

    const billItem = (name,price,withoutBottomBorder) => {
    return (
      <View style={{justifyContent:'space-between',borderBottomWidth:withoutBottomBorder?0:1,borderBottomColor:GLOBAL.Color.borderColor,height:'33%',width:'90%',flexDirection:'row'}}>
        <AppText text={name}/>
        <AppText text={price}/>
      </View>
    )
  }

    return (
      <View style={{height:'100%',width:'100%'}}>
        <ScrollView>
        <AppTopBar title={'My Cart'}/>
        <View style={{width:ScreenWidth,height:ScreenHeight*.88,alignItems:'center'}}>
            <View style={{width:'100%',height:heightPixel(400)}}>
              <AppFlatList numColumns={1} data={Data.Cart} renderItem={({item})=> <CartItem item={item}/>}/>
            </View>
            <View style={{alignItems:'center',flexDirection:'row',marginTop:heightPixel(30),width:'85%',height:'6%',borderRadius:normalize(30),backgroundColor:'white'}}>
              <TextInput placeholder={'\tPromo Code'} style={{width:'65%'}}/>
              <AppBTN text={'Apply'} textSize={17} height={'100%'} width={'35%'}/>
            </View>
            <View style={{alignItems:'center',marginTop:heightPixel(25),width:'85%',height:'14%',borderRadius:normalize(30),backgroundColor:'white'}}>
              {billItem('Sub Total','$300.00')}
              {billItem('Shipping','$10.00')}
              {billItem('Total','$310.00',true)}
            </View>
            <AppBTN marginTop={37} text={'Finalize Order'}/>
        </View>
        </ScrollView>
      </View>
    );
  }
}
export default About;
