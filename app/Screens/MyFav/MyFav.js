import React from 'react';
import { View, Alert } from 'react-native';
import { AppTopBar, AppFlatList } from '../Common/';
const GLOBAL = require('../Common/Globals');
import FavItem from './Components/FavItem';
import Data from '../MockData/data';

class MyFav extends React.Component {

  componentDidMount() {
    Alert.alert('This screen is under development');
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={'Favourites'} />
        <AppFlatList numColumns={1} data={Data.Home.MostOrdered} renderItem={({ item }) => <FavItem item={item} />} />
      </View>
    );
  }
}

export default MyFav;
