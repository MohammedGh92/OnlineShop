import React, {Component} from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import {AppTopBar,AppSearchBar,AppFlatList,AppImage,AppBottomBar,AppHorListOfItems} from '../Common/';
import {BigPromo,TwoPromos,WideBanner} from './Components/';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import Data from '../MockData/data';

class Home extends React.Component{

  render() {
    return (
      <View style={{height:'100%',width:'100%'}}>
        <View style={{height:'10%',width:'100%'}}><AppSearchBar/></View>
        <View style={{height:'82%',width:'100%'}}>
        <ScrollView>
          <View style={{alignItems:'center'}}>
              <BigPromo/>
              <TwoPromos/>
              <WideBanner source={require('./Components/SamplePhotos/WideBanner1-1.png')}/>
              <AppHorListOfItems data={Data.Home.MostOrdered}/>
              <WideBanner source={require('./Components/SamplePhotos/WideBanner1-2.png')}/>
              <AppHorListOfItems title={'New Products'} data={Data.Home.MostOrdered}/>
              <WideBanner source={require('./Components/SamplePhotos/WideBanner1-3.png')}/>
              <AppHorListOfItems title={'Prefumes'} data={Data.Home.MostOrdered}/>
              <WideBanner source={require('./Components/SamplePhotos/WideBanner1-4.png')}/>
              <AppHorListOfItems title={'Perfumes'} data={Data.Home.MostOrdered}/>
              <WideBanner source={require('./Components/SamplePhotos/WideBanner1-5.png')}/>
              <WideBanner source={require('./Components/SamplePhotos/WideBanner1-6.png')}/>
              <AppHorListOfItems title={'Electric'} data={Data.Home.MostOrdered}/>
              <View style={{height:heightPixel(10)}}/>
          </View>
        </ScrollView>
        </View>
        <View style={{height:'8%',width:'100%'}}><AppBottomBar choosed={0}/></View>
      </View>
    );
  }
}

export default Home;
