import React, {Component,useState} from 'react'
import axios from 'axios';
import {Text,View,StyleSheet} from 'react-native'
import {AppText,LogoAndName,AppImage,AppBTN} from '../Common/';
import {connect,useSelector,useDispatch} from 'react-redux';
import {increment,decrement,incByAmount,getAPI} from "../../redux/counterSlice"

export default function NewScreen3(){
  const countState = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  const Increament = ()=>{dispatch(increment());}
  const Decreament = ()=>{dispatch(decrement());}
  const IncByAmount = (amount)=>{dispatch(incByAmount(amount));}
  const GetAPI = ()=>{dispatch(getAPI());}
  console.log(countState);
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <AppText text={"Here:"+countState.count} size={29}/>
        <AppBTN marginTop={20} text={'inc'} onPress={Increament}/>
        <AppBTN marginTop={20} text={'dec'} onPress={Decreament}/>
        <AppBTN marginTop={20} text={'incByVal'} onPress={()=>IncByAmount(5)}/>
        <AppBTN marginTop={20} text={'GetAPI'} onPress={()=>GetAPI()}/>
      </View>
    );
}
