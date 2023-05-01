import React, { useState } from 'react';
import { TouchableOpacity, Dimensions, View, Alert, ScrollView } from 'react-native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
import { AppText, LogoAndName, AppBTN, AppTextInput, AppCheckBox } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { heightPixel } from '../Common/Utils/PixelNormalization';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import user from '../../user';

export default function Register(props) {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [loading, setLoading] = useState(false);

  function onRegisterClicked() {
    if (email == '' || pass == '' || confirmPass == '' || phone == '') {
      Alert.alert('Please fill all the fields');
      return;
    }
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, pass)
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
    await firestore()
      .collection('users')
      .doc(email)
      .set({
        phone: phone,
      })
      .then(() => {
        console.log('User added!');
        saveUserDataLocally();
      });
  }

  async function saveUserDataLocally() {
    const userObj = { email: email, phone: phone };
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

  function submitEmail(email) { setEmail(email); }
  function submitPhone(phone) { setPhone(phone); }
  function submitPass(pass) { setPass(pass); }
  function submitConfirmPass(confirmPass) { setConfirmPass(confirmPass); }

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', height: ScreenHeight * 0.95, width: ScreenWidth }}>
        <LogoAndName />
        <AppText marginTop={20} text="New account" size={26} />
        <AppText marginTop={2} text={"Register"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <AppTextInput marginTop={10} keyboardType={'email-address'} onEndEditing={submitEmail} />
        <AppTextInput marginTop={10} keyboardType={'numeric'} name={'cellphone'} placeholder={'Phone'} onEndEditing={submitPhone} />
        <AppTextInput marginTop={10} secureTextEntry name={'lock'} placeholder={'Password'} onEndEditing={submitPass} />
        <AppTextInput marginTop={10} secureTextEntry name={'lock'} placeholder={'Password confirmation'} onEndEditing={submitConfirmPass} />
        <View style={{ marginTop: heightPixel(15), flexDirection: 'row', justifyContent: 'center' }}>
          <AppCheckBox />
          <AppText text={"\t \t I agree to the "} color={GLOBAL.Color.darkGrey} size={12} fontFamily={'Montserrat-SemiBold'} />
          <TouchableOpacity onPress={onPrivacyClick}><AppText text={"privacy policy"} textStyle={{ textDecorationLine: 'underline' }} color={'blue'} size={12} fontFamily={'Montserrat-SemiBold'} /></TouchableOpacity>
          <AppText text={" and "} color={GLOBAL.Color.darkGrey} size={12} fontFamily={'Montserrat-SemiBold'} />
          <TouchableOpacity onPress={onTermsClick}><AppText text={"terms of use"} color={'blue'} textStyle={{ textDecorationLine: 'underline' }} size={12} fontFamily={'Montserrat-SemiBold'} /></TouchableOpacity>
        </View>
        <AppBTN marginTop={40} onPress={onRegisterClicked} text={'Register'} loading={loading} />
        <View style={{ marginTop: heightPixel(55), flexDirection: 'row' }}>
          <AppText text={"Have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'} />
          <TouchableOpacity onPress={onSignInClick}><AppText text={" Sign in"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'} /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}