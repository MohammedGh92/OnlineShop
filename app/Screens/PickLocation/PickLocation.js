import React, {Component} from 'react';
import {View,ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Permissions from 'react-native-permissions';

class PickLocation extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      firstLat:null,
      firstLon:null,
       latitude: null,
       longitude: null,
       error: null,
       locationPermission:'',
       MapSetted:false,
       marginBottom:0,
       BTNShaowed:false,
       Loading:true
    }
  }

  componentDidMount() {

    LocationServicesDialogBox.checkLocationServicesIsEnabled({
    message: "<h2 style='color: #0af13e'>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
    ok: "YES",
    cancel: "NO",
    enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
    showDialog: true, // false => Opens the Location access page directly
    openLocationServices: true, // false => Directly catch method is called if location services are turned off
    preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
    preventBackClick: true, // true => To prevent the location services popup from closing when it is clicked back button
    providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
  }).then((success) => {
    console.log('success:'+JSON.stringify(success));
    this._requestPermission();
  }).catch((error) => {
    this.props.navigation.goBack();
  });
  DeviceEventEmitter.addListener('locationProviderStatusChange', (status) => { // only trigger when "providerListener" is enabled
  });
}
    componentWillUnmount() {
        // used only when "providerListener" is enabled
        LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener
        clearInterval(this._interval);
    }

     _requestPermission () {
    Permissions.request('location').then(() => {
      Geolocation.getCurrentPosition(
          (position) => {
              this.setState({ latitude: position.coords.latitude,longitude: position.coords.longitude
              ,firstLat: position.coords.latitude,firstLon: position.coords.longitude})
          },
          (error) => {
          },
          {timeout: 15000}
      );
    });
  }

   OnMapClick(NewCoord){
    this.setState({MapSetted:true,longitude:NewCoord.longitude,latitude:NewCoord.latitude,firstLat:this.firstLat,firstLon:this.firstLon});
  }


  render() {
    if(this.state.latitude===null)
      return <ActivityIndicator />
    return (
      <View style={{width:'100%',height:'100%',alignItems:'center'}}>
      <MapView
      style={{width:'100%',height:'100%'}}
      showsUserLocation
      onMapReady={() => this.setState({ marginBottom: 1 })}
      showsMyLocationButton
      showsCompass
      initialRegion={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}
>
<Marker
  draggable
  coordinate={{
    latitude: this.state.latitude,
    longitude: this.state.longitude,
  }}
/>
</MapView>
      </View>
    );
  }

}
export default PickLocation;
