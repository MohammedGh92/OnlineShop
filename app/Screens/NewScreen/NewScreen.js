import React, {Component,useState, useEffect} from 'react'
import axios from 'axios';
import {Text,View,StyleSheet} from 'react-native'
import {AppText,LogoAndName,AppImage,AppBTN} from '../Common/';
import { connect } from 'react-redux';
import {increase,decrease,incByAmount,getAPI} from '../../actions/action';

class NewScreen extends React.Component{

  state = {
         myState:0
     }

  render() {
    console.log(this.props.count);
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <AppText text={"Here:"+this.props.count} size={29}/>
        <AppText text={"State:"+this.state.myState} size={29}/>
        <AppBTN marginTop={20} text={'inc'} onPress={()=>this.props.increase()}/>
        <AppBTN marginTop={20} text={'dec'} onPress={()=>this.props.decrease()}/>
        <AppBTN marginTop={20} text={'change'} onPress={()=>this.props.incByAmount(3)}/>
        <AppBTN marginTop={20} text={'getAPI'} onPress={()=>this.props.getAPI()}/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    count: state.count
  }
};

function mapDispatchToProps(dispatch){
  return{
    increase:()=>dispatch(increase()),
    decrease:()=>dispatch(decrease()),
    incByAmount:(amount)=>dispatch(incByAmount(amount)),
    getAPI:()=>dispatch(getAPI()),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(NewScreen)
