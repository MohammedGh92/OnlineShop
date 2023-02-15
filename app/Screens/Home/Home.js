import React, {Component} from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import {AppTopBar,AppSearchBar,AppFlatList,AppImage} from '../Common/';
import {BigPromo,TwoPromos,WideBanner,ListOfProducts} from './Components/';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import Data from '../MockData/data';
class Home extends React.Component{

  render() {
    return (
      <ScrollView>
        <View style={{alignItems:'center'}}>
          <AppSearchBar/>
          {
          //   <BigPromo/>
          // <TwoPromos/>
          // <WideBanner/>
        }
          <ListOfProducts data={Data.Home.MostOrdered}/>
        </View>
      </ScrollView>
    );
  }
}


export default Home;
