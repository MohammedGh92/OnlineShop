import React from 'react';
import {ActivityIndicator} from 'react-native';

  const AppLoader = (props) => {
    return (
      <ActivityIndicator style={{flex:1,alignSelf:'center',justifyContent:'center',alignItems:'center'}}/>
    );
}

export default AppLoader;
