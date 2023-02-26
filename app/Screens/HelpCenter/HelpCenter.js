import React, {Component} from 'react';
import {View} from 'react-native';
import {AppIcon,AppText,AppTopBar,AppTextInput,AppListItem,AppToggleBTN,AppPicker} from '../Common/';
import {fontPixel,normalize,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
const GLOBAL = require('../Common');

class HelpCenter extends React.Component{

  render() {

    const listItem = (iconName,title,height) => {
    return (
      <AppListItem style={{height:heightPixel(height?height:36)}} marginTop={3} icon={iconName} iconSize={24} title={title}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <AppIcon name={'chevron-right'} color={'#707070'} size={25}/>
        </View>
      </AppListItem>
    )
  }

    return (
      <View style={{alignItems:'center',width:'100%',height:'100%'}}>
        <AppTopBar title={'Help Center'}/>
        <View style={{width:'90%',height:'90%'}}>
          <View style={{marginTop:normalize(15),height:'18%',width:'100%'}}>
            <AppIcon name={'headset'} color={GLOBAL.Color.c1} size={60}/>
            <AppText text={'We are here\n to help you'} size={15}/>
          </View>
          <AppText text={'Live Chat'} textAlign={'left'} size={13}/>
          {listItem('chat-processing-outline','Customers service',40)}
          <AppText marginTop={3} marginBottom={3} text={'Other links'} textAlign={'left'} size={13}/>
          {listItem('email-outline','Contact Us')}
          {listItem('file-document','Terms and conditions')}
          {listItem('file-document','Privacy Policy')}
          {listItem('medal-outline','Rate Us')}
          <AppText marginTop={3} marginBottom={3} text={'Social Media'} textAlign={'left'} size={13}/>
          {listItem('snapchat','SnapChat')}
          {listItem('instagram','Instagram')}
          {listItem('whatsapp','WhatsApp')}
          {listItem('youtube','YouTube')}
          {listItem('facebook','FaceBook')}
          {listItem('twitter','Twitter')}
        </View>
      </View>
    );
  }

}
export default HelpCenter;
