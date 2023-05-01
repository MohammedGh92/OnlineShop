import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { AppTopBar, AppFlatList, AppLoader } from '../Common/';
const GLOBAL = require('../Common/Globals');
import OrderItem from './Components/OrderItem';
import user from '../../user';
import firestore from '@react-native-firebase/firestore';

class MyOrders extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subTotal: 0,
      shipping: 10,
      data: null,
      loading: true,
    }
  }

  async componentDidMount() {
    this.LoadData();
  }

  async LoadData() {
    await firestore()
      .collection('users')
      .doc(user.userObj.email)
      .get()
      .then(documentSnapshot => {
        this.setState({ data: documentSnapshot.data().orders, loading: false });
      });
  }

  render() {
    const { loading, data } = this.state;
    if (loading)
      return <AppLoader />
    return (
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={'My Orders'} />
        <AppFlatList numColumns={1} data={data} renderItem={({ item }) => <OrderItem item={item} />} />
      </View>
    );
  }
}

export default MyOrders;
