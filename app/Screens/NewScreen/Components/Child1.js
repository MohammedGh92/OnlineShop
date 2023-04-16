import React,{useState,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {AppBTN} from '../../Common/';

const Child1 = (props) => {

const [resType,setResType] = useState('posts')

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/'+resType)
      .then(response => response.json())
      .then(json => console.log(json))
  console.log('resType:'+resType);
},[resType])

  return (
      <View style={{flex:1}}>
        <AppBTN onPress={()=>setResType('posts')}/>
        <AppBTN onPress={()=>setResType('users')}/>
        <AppBTN onPress={()=>setResType('comments')}/>
      </View>
    );
}

export default Child1;
