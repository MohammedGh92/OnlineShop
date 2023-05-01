import React from 'react';
import { View } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppFlatList, AppLoader, AppProductItem } from '../Common/';
const GLOBAL = require('../Common/Globals');
import Data from '../MockData/data';
import firestore from '@react-native-firebase/firestore';

class SearchProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null
    }
  }

  componentDidMount() {
    const searchInput = this.props.route.params.searchInput;
    this.searchThisProduct(searchInput);
  }

  async searchThisProduct(input) {
    let results = [];
    await firestore()
      .collection('products')
      .orderBy('name')
      .startAt(input)
      .endAt(input + '~')
      .get()
      .then(documentSnapshot => {
        documentSnapshot.docs.map((item) => {
          results.push(item.data());
        })
        this.setState({ data: results, loading: false })
      });
  }

  render() {
    const { loading, data } = this.state;
    if (loading)
      return <AppLoader />
    return (
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={'Results'} />
        <View style={{ height: '100%', width: '95%' }}>
          <AppFlatList style={{ width: '100%' }} numColumns={2} data={data}
            renderItem={({ item }) => <AppProductItem height={heightPixel(300)} item={item} />} />
          <View style={{ height: '16%' }} />
        </View>
      </View>
    );
  }
}

export default SearchProducts;
