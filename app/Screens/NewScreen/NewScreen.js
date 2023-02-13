import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet,Dimensions,View,Text} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;

class NewScreen extends React.Component{


    constructor(props) {

      super(props);
      this.state = {

      }
    }

    componentDidMount(){


    }

UNSAFE_componentWillReceiveProps(nextProps){

}


  render() {
    return (
      <View style={{flexDirection: 'column',flex:1}}>
          <View style={{backgroundColor:'red',flex:1}}/>
          <View style={{backgroundColor:'blue',flex:1}}/>
          <View style={{backgroundColor:'green',flex:1}}/>
          <View style={{backgroundColor:'yellow',flex:1}}/>
          <View style={{backgroundColor:'pink',flex:1}}/>
          <View style={{backgroundColor:'red',flex:1}}/>
          <View style={{backgroundColor:'blue',flex:1}}/>
          <View style={{backgroundColor:'green',flex:1}}/>
          <View style={{backgroundColor:'yellow',flex:1}}/>
          <View style={{backgroundColor:'pink',flex:1}}/>
          <View style={{backgroundColor:'red',flex:1}}/>
          <View style={{backgroundColor:'blue',flex:1}}/>
          <View style={{backgroundColor:'green',flex:1}}/>
          <View style={{backgroundColor:'yellow',flex:1}}/>
          <View style={{backgroundColor:'pink',flex:1}}/>
          <View style={{backgroundColor:'red',flex:1}}/>
          <View style={{backgroundColor:'blue',flex:1}}/>
          <View style={{backgroundColor:'green',flex:1}}/>
          <View style={{backgroundColor:'yellow',flex:1}}/>
          <View style={{backgroundColor:'pink',flex:1}}/>
      </View>
    );
  }
}


export default NewScreen;
