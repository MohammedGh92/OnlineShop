import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert, Dimensions, View, ScrollView } from 'react-native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
import { AppText, LogoAndName, AppBTN, AppTextInput, AppLoader } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { heightPixel } from '../Common/Utils/PixelNormalization';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import user from '../../user';

export default function Login(props) {

  const [initializing, setInitializing] = useState(true);
  const [fullLoading, setFullLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    auth().onAuthStateChanged(onAuthStateChanged);
    checkSavedAccount();
  }, []);

  function onAuthStateChanged() {
    if (initializing) setInitializing(false);
  }

  async function checkSavedAccount() {
    await user.loadData();
    if (user.userObj == null)
      setFullLoading(false);
    else
      moveToNextScreen();
  }

  function moveToNextScreen() {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  function onForgotPasswordClick() {
    props.navigation.navigate('ForgetPass');
  }

  function onSignInClick() {
    if (email == '' || pass == '') {
      Alert.alert('Please fill all the fields');
      return;
    }
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        getUserFireStoreData();
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          getUserFireStoreData();
        }
        Alert.alert(error.code);
      });
  }

  async function getUserFireStoreData() {
    const fireStoreuser = await firestore().collection('users').doc(email).get();
    setEmail(email);
    setPhone(fireStoreuser._data.phone);
    saveUserDataLocally();
  }

  function onSkipClick() {
    moveToNextScreen();
  }

  function onSignUpClick() {
    props.navigation.navigate('Register');
  }

  async function saveUserDataLocally() {
    const userObj = { email: email, phone: phone };
    await user.saveData(userObj);
    moveToNextScreen();
  }

  function submitEmail(email) { setEmail(email); }
  function submitPass(pass) { setPass(pass); }

  if (initializing || fullLoading)
    return <AppLoader />

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', height: ScreenHeight * 0.9675, width: ScreenWidth }}>
        <LogoAndName />
        <AppText marginTop={27} text="Welcome back" size={24} />
        <AppText marginTop={3} text={"Login"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <AppTextInput marginTop={40} keyboardType={'email-address'} onEndEditing={submitEmail} />
        <AppTextInput marginTop={10} name={'lock'} secureTextEntry placeholder={'Password'} onEndEditing={submitPass} />
        <TouchableOpacity onPress={onForgotPasswordClick} style={{ marginTop: heightPixel(10) }}><AppText text={"Forget Password?"} color={GLOBAL.Color.darkGrey}
          size={14} fontFamily={'Montserrat-SemiBold'} />
        </TouchableOpacity>
        <AppBTN onPress={onSignInClick} text={'Login'} marginTop={45} loading={loading} />
        <AppBTN onPress={onSkipClick} text={'Skip'} color={GLOBAL.Color.c3} marginTop={15} />
        <View style={{ marginTop: heightPixel(80), flexDirection: 'row' }}>
          <AppText text={"Don’t have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'} />
          <TouchableOpacity onPress={onSignUpClick}><AppText text={" Sign up"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'} /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}