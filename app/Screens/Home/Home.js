import React from 'react';
import { View, ScrollView } from 'react-native';
import { AppSearchBar, AppBottomBar, AppLoader, AppHorListOfItems } from '../Common/';
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
    // await this.LoadData();
    // await this.setData();
  }

  async setData() {
    // await firestore()
    //   .collection('sections')
    //   .update({
    //     firestore.FieldValue.arrayUnion(this.getOrderObj())
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });
  }

  /*
    documentSnapshot:
    0:bigPromos
    1:featuredProducts
    2:mostOrdered
    3:newProducts
    4:TwoPromos
    5:wideBanners
  */
  async LoadData() {
    await firestore()
      .collection('home')
      .get()
      .then(documentSnapshot => {
        this.setState({ data: documentSnapshot.docs, loading: false })
        console.log(documentSnapshot.docs[2].data());
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
        <View style={{ height: '10%', width: '100%' }}><AppSearchBar /></View>
        <View style={{ marginTop: normalize(3), height: '82%', width: '100%' }}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              {/*<BigPromo data={data[0].data().data} />*/}
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
