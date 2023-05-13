import React, { useState, useEffect } from 'react';
import { Dimensions, View, Alert } from 'react-native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
import { AppText, LogoAndName, AppBTN, AppTextInput } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { ForgetPassForm } from './Components/';
import auth from '@react-native-firebase/auth';

export default function ForgetPass(props) {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ Status: 0 });
  const {
    Status,
    Email
  } = data;

  useEffect(() => {
    if (Status == 1)
      onSendClick();
  }, [data]);



  async function onSendClick() {
    if (!data || loading)
      return;
    setLoading(true);
    await auth()
      .sendPasswordResetEmail(Email)
      .then(() => {
        Alert.alert('Password reset email has been sent!');
        props.navigation.goBack();
      })
      .catch(error => {
        console.error('Error:' + error)
      });
    setThisData(0);
    setLoading(false);
  }

  const onSubmit = data => {
    const {
      Email
    } = data;
    setThisData(1, Email);
  };

  function setThisData(status, email) {
    setData({ Status: status, Email: email })
  }


  return (
    <View style={{ alignItems: 'center', height: ScreenHeight * 0.95, width: ScreenWidth }}>
      <LogoAndName />
      <AppText marginTop={20} text="Forget password" size={26} />
      <AppText marginTop={2} text={"Enter your email to get \n an activation message"} size={14}
        color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
      <ForgetPassForm loading={loading} onSubmitClicked={onSubmit} />

    </View>
  );
}
