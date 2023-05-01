import React, {Component,useState} from 'react'
import axios from 'axios';
import {Text,View,StyleSheet} from 'react-native'
import {AppText,LogoAndName,AppImage,AppBTN} from '../Common/';
import {connect,useSelector,useDispatch} from 'react-redux';
import {increamentAction,decreamentAction,incByAmountAction,getAPIAction} from "../../redux/actions/counterActions"

export default function NewScreen2(){
  const countState = useSelector(state=>state.counter.count);
  const dispatch = useDispatch();

  const Increament = ()=>{increamentAction(dispatch);}
  const Decreament = ()=>{decreamentAction(dispatch);}
  const IncByAmount = (amount)=>{incByAmountAction(amount,dispatch);}
  const GetAPI = ()=>{getAPIAction(dispatch);}

    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <AppText text={"Here:"+countState} size={29}/>
        <AppBTN marginTop={20} text={'inc'} onPress={Increament}/>
        <AppBTN marginTop={20} text={'dec'} onPress={Decreament}/>
        <AppBTN marginTop={20} text={'incByVal'} onPress={()=>IncByAmount(5)}/>
        <AppBTN marginTop={20} text={'getAPI'} onPress={()=>GetAPI()}/>
      </View>
    );
}
