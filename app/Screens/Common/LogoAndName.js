import React, {Component} from 'react';
import {Dimensions,Image} from 'react-native';
const {width: ScreenWidth,height: ScreenHeight,} = Dimensions.get('window');

class LogoAndName extends React.Component{

  render() {
    const props = this.props;
    return (
      <Image style={{alignSelf:'center',width:ScreenWidth*(props.width?props.width:1),height:'100%'}}
       resizeMode={'contain'} source={require('../../Assets/LogoAndName.png')}/>
    );
  }
}

export default LogoAndName;
