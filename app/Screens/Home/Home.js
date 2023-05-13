import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { AppTopBar, AppBottomBar, AppLoader, AppHorListOfItems, AppSearchBar } from '../Common/';
import { BigPromo, TwoPromos, WideBanner } from './Components/';
import { normalize, heightPixel } from '../Common/Utils/PixelNormalization';
import firestore from '@react-native-firebase/firestore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    }
  }

  async componentDidMount() {
    await this.LoadData();
  }

  async LoadData() {
    await firestore()
      .collection('home')
      .get()
      .then(documentSnapshot => {
        console.log(documentSnapshot.docs)
        this.setState({ data: documentSnapshot.docs, loading: false })
      });
  }

  render() {

    const {
      loading,
      data
    } = this.state;

    if (loading)
      return <AppLoader />

    return (
      <View style={{ height: '100%', width: '100%' }}>
        <AppSearchBar />
        <View style={{ marginTop: '1%', height: '82%', width: '100%' }}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <BigPromo data={data[0].data().data} />
              <TwoPromos data={data[4].data().data} />
              <WideBanner data={data[5].data().data[0].image} />
              <AppHorListOfItems data={data[2].data().data} />
              <WideBanner data={data[5].data().data[1].image} />
              <AppHorListOfItems data={data[3].data().data} />
              <WideBanner data={data[5].data().data[2].image} />
              <AppHorListOfItems data={data[1].data().data[0].products} />
              <WideBanner data={data[5].data().data[3].image} />
              <AppHorListOfItems data={data[1].data().data[1].products} />
              <WideBanner data={data[5].data().data[4].image} />
              <WideBanner data={data[5].data().data[5].image} />
              <AppHorListOfItems data={data[1].data().data[2].products} />
              <View style={{ height: heightPixel(10) }} />
            </View>
          </ScrollView>
        </View>
        <AppBottomBar choosed={0} />
      </View>
    );
  }
}

export default Home;
