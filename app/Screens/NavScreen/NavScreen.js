import React, {Component} from 'react';
import {View} from 'react-native';
import {AppIcon,AppImage,AppText,AppTopBar,AppListItem,AppBottomBar} from '../Common/';
import {fontPixel,normalize,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
const GLOBAL = require('../Common');

class NavScreen extends React.Component{

  render() {

    const listItem = (iconName,title) => {
    return (
      <AppListItem borderColor={'transparent'} style={{height:heightPixel(50)}} marginTop={6}
      icon={iconName} iconSize={24} title={title}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <AppIcon name={'chevron-right'} color={'#707070'} size={25}/>
        </View>
      </AppListItem>
    )
  }

    return (
      <View style={{alignItems:'center',width:'100%',height:'100%'}}>
        <AppTopBar title={'My Profile'} hideLeft/>
        <View style={{width:'90%',height:'90%'}}>
          <View style={{backgroundColor:'white',flexDirection:'row',marginTop:normalize(15),height:'12%',width:'100%'}}>
            <AppImage source={require('../../Assets/Logo.png')} width={40}/>
            <View style={{margin:normalize(8),justifyContent:'center'}}>
              <AppText text={'\tWelcome, Mohammed'} textAlign={'left'} color={GLOBAL.Color.c1} size={15}/>
              <AppText text={'\tmohammedghabyen@gmail.com'} color={GLOBAL.Color.grey} size={13} textAlign={'left'}/>
            </View>
          </View>
          {listItem('information-outline','My Info')}
          {listItem('heart-outline','Favourites')}
          {listItem('package-variant-closed','My Orders')}
          {listItem('map-marker','My Addresses')}
          {listItem('wallet','Wallet')}
          {listItem('comment-question-outline','Help Center')}
          {listItem('cog','Settings')}
          {listItem('information-outline','About Us')}
          {listItem('logout','LogOut')}
          <AppText marginTop={13} text={'App Version:0.0.1'} color={GLOBAL.Color.grey} size={13}/>
        </View>
        <AppBottomBar choosed={4}/>
      </View>
    );
  }

}
export default NavScreen;
