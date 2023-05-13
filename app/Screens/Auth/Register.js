import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Dimensions, View, Alert, ScrollView } from 'react-native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
import { AppText, LogoAndName, AppBTN, AppTextInput, AppCheckBox } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { heightPixel } from '../Common/Utils/PixelNormalization';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import user from '../../user';
import { RegisterForm } from './Components/';

export default function Register(props) {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ Status: 0 });

  useEffect(() => {
    if (data.Status == 1)
      onRegisterClicked();
  }, [data]);

  function onRegisterClicked() {
    if (!data || loading)
      return;

    const {
      Email,
      Password
    } = data;

    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(() => {
        Alert.alert('User account created successfully!');
        saveUserDataFireStore();
      })
      .catch(error => {
        setLoading(false);
        Alert.alert(error.code);
      });
  }

  async function saveUserDataFireStore() {
    const {
      Email,
      Phone,
    } = data;
    await firestore()
      .collection('users')
      .doc(Email)
      .set({
        phone: Phone,
      })
      .then(() => {
        console.log('User added!');
        saveUserDataLocally();
      });
  }

  async function saveUserDataLocally() {
    const {
      Email,
      Phone
    } = data;
    const userObj = { email: Email, phone: Phone };
    user.saveData(userObj);
    moveToNextScreen();
  }

  function moveToNextScreen() {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  function onPrivacyClick() {
    props.navigation.navigate('Privacy');
  }

  function onTermsClick() {
    props.navigation.navigate('Terms');
  }

  function onSignInClick() {
    props.navigation.navigate('Login');
  }

  const onSubmit = data => {
    console.log(data);
    const {
      Email,
      Phone,
      Password,
      ConfirmPassword
    } = data;
    setThisData(1, Email, Phone, Password, ConfirmPassword);
  };

  function setThisData(status, email, phone, pass, confirmPass) {
    setData({ Status: status, Email: email, Phone: phone, Password: pass, ConfirmPassword: confirmPass })
  }

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', height: ScreenHeight * 0.95, width: ScreenWidth }}>
        <LogoAndName />
        <AppText marginTop={20} text="New account" size={26} />
        <AppText marginTop={2} text={"Register"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <RegisterForm onPrivacyClick={onPrivacyClick} onTermsClick={onTermsClick} loading={loading} onSubmit={onSubmit} />
        <View style={{ marginTop: heightPixel(55), flexDirection: 'row' }}>
          <AppText text={"Have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'} />
          <TouchableOpacity onPress={onSignInClick}><AppText text={" Sign in"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'} /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}