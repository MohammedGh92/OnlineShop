import React, {Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {Child1} from './Components/';

class NewScreen extends React.Component{

  render() {
    return (
      <View style={{flex:1}}>
        <Child1/>
      </View>
    );
  }
}

export default NewScreen;
