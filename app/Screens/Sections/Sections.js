import React from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar } from '../Common/';
import SectionItem from './Components/SectionItem';
import Data from '../MockData/data/';

class Sections extends React.Component {

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <AppTopBar title={'Main Sections'} />
        <AppFlatList numColumns={2} data={Data.Sections} renderItem={({ item }) => <SectionItem item={item} />} />
        <AppBottomBar choosed={1} />
      </View>
    );
  }
}

export default Sections;
