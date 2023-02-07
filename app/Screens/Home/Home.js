import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet,I18nManager,Alert,ScrollView,Dimensions,Platform,DeviceEventEmitter,AppState,View,StatusBar} from 'react-native';
import {
  NativeBaseProvider,
  Container
} from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from '@rneui/base';
import {connect} from 'react-redux';
import {fetchTasks} from '../../Actions';
// import { Promoitons,Maincategories,RecentProducts,CommonSubCat,CommonBrands } from './components';
import UserProfile from '../../UserProfile';
// import SplashScreen from 'react-native-splash-screen';
// import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
// import Geolocation from 'react-native-geolocation-service';
// import Permissions from 'react-native-permissions'

export const getCurrentLocation = () => {
return new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
});
};
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;

class Home extends React.Component{


    constructor(props) {

      super(props);
      this.state = {
        commonPromos:[],
        mainCat:[],
        recentProducts:[],
        comSubCat:[],
        ComBrands:[],
        Called:false,
        notificationOpen:false
      }
    }

    componentDidMount(){
       // SplashScreen.hide();
       this.props.fetchTasks();
       // this.getCurrentLocationData();
       // this.GetUserData();
    }


    GetUserData(){
      UserID="";
      UserName="";
      AsyncStorage.getItem('user_id', (err, result) => {
      if(result!==null){
        UserID=result;
        AsyncStorage.getItem('user_name', (err, result) => {
        if(result!==null){
          UserName=result;
          AsyncStorage.getItem('user_photo', (err, result) => {
          if(result!==null)
            UserProfile.getInstance().SetThisUserData(UserID,UserName,result);
          else
            UserProfile.getInstance().SetThisUserData(UserID,UserName,'1');
          }
          );
        }
        });
      }
    });
  }

    getCurrentLocationData(){
      if(Platform.OS === 'ios'){
        this._requestPermission();
      }else {
      LocationServicesDialogBox.checkLocationServicesIsEnabled({
          message: "<h2 style='color: #0af13e'>Use Location ?</h2>This app wants GPS enable:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
          ok: "YES",
          cancel: "NO",
          enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
          showDialog: true, // false => Opens the Location access page directly
          openLocationServices: true, // false => Directly catch method is called if location services are turned off
          preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
          preventBackClick: true, // true => To prevent the location services popup from closing when it is clicked back button
          providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
        }).then((sucess) => {
          this._requestPermission();
        }).catch((error) => {

        });
        DeviceEventEmitter.addListener('locationProviderStatusChange', (status) => { // only trigger when "providerListener" is enabled
        });
    }
  }

_requestPermission () {
Permissions.request('location').then(() => {
  Geolocation.getCurrentPosition(
      () => {
      },
      () => {
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
});
}


UNSAFE_componentWillReceiveProps(nextProps){
  if(nextProps.msg==='LOADING_SUCCESS'&&!this.state.Called){
    this.setState({commonPromos:nextProps.tasks.tasks.promos,
      mainCat:nextProps.tasks.tasks.maincategories,
      recentProducts:nextProps.tasks.tasks.products,comSubCat:nextProps.tasks.tasks.commonsubcategories,
      ComBrands:nextProps.tasks.tasks.commonbrands,Called:true});
  }
}

  _CartMenuBTN(){
    if(UserProfile.getInstance().HaveAccount())
      this.props.navigation.navigate('MyCart');
    else
      this.props.navigation.navigate('SignMenu');
  }

  Header = () => {
return(
        <Header style={{backgroundColor:'#424242'}}>
          <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" color='white'/>
            </Button>
          </Left>
          <Body>
            <Title>{I18nManager.isRTL?('متجر 0.5'):('Matjar 0.5')}</Title>
          </Body>
          <Right>
          <Button
            transparent
            onPress={() => this._CartMenuBTN()}>
            <Icon name="shopping-cart" color='white'/>
            </Button>
          </Right>
          <StatusBar backgroundColor="#3b3b3b" barStyle="light-content" />
        </Header>
)
    }

  render() {
    return (
      <NativeBaseProvider>
        <Container>
          <ScrollView showsVerticalScrollIndicator={false}>

           </ScrollView>
        </Container>
      </NativeBaseProvider>
    );
  }
}

// <Promoitons Promos={this.state.commonPromos}/>
// <Maincategories IsMainCat={true} MainCat={this.state.mainCat} CatName={I18nManager.isRTL?('الأقسام الرئيسية'):('Main Categories')} Navigator={this.props.navigation}/>
// <RecentProducts IsVertical={false} RecentPro={this.state.recentProducts} CatName={I18nManager.isRTL?('أحدث المنتجات'):('New Products')} Navigator={this.props.navigation}/>
// <CommonSubCat ComonSubCategories={this.state.comSubCat} Navigator={this.props.navigation}/>
// <CommonBrands ComonBrands={this.state.ComBrands}  Navigator={this.props.navigation}/>

const mapStateToProps = state =>{
  return{
    error: state.HomeRed.error,
    loading: state.HomeRed.loading,
    tasks: state.HomeRed.tasks,
    msg: state.HomeRed.msg
  }
}

export default connect(mapStateToProps ,{ fetchTasks })( Home );
