import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet,Dimensions,View,Text} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;

class NewScreen extends React.Component{


    constructor(props) {

      super(props);
      this.state = {

      }
    }

    componentDidMount(){


    }

UNSAFE_componentWillReceiveProps(nextProps){

}


  render() {
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}


export default NewScreen;
