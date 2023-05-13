import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert, Dimensions, View, ScrollView } from 'react-native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
import { AppText, LogoAndName, AppBTN, AppLoader } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { LoginForm } from './Components/';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import user from '../../user';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadData } from "../../redux/slices/userSlice";

export default function Login(props) {

  // const userState = useSelector(state => state.user);
  // const dispatch = useDispatch();
  // const loadUserData = () => { dispatch(loadData()); }
  // console.log('userState:' + JSON.stringify(userState))

  const [initializing, setInitializing] = useState(true);
  const [fullLoading, setFullLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ Status: 0 });
  const {
    Email,
    Phone,
    Password
  } = data;

  useEffect(() => {
    // loadUserData();
    auth().onAuthStateChanged(onAuthStateChanged);
    if (data.Status == 0)
      checkSavedAccount();
    else if (data.Status == 1)
      onSignInClick();
    else if (data.Status == 2)
      saveUserDataLocally();
  }, [data]);

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
      routes: [{ name: 'NewScreen3' }],
    });
  }

  function onForgotPasswordClick() {
    props.navigation.navigate('ForgetPass');
  }

  function onSignInClick() {
    if (!data || loading)
      return;
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(Email, Password)
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
    const fireStoreuser = await firestore().collection('users').doc(data.Email).get();
    setThisData(2, data.Email, '', fireStoreuser.data().phone);
  }

  function onSkipClick() {
    moveToNextScreen();
  }

  function onSignUpClick() {
    props.navigation.navigate('Register');
  }

  async function saveUserDataLocally() {
    const userObj = { email: Email, phone: Phone };
    await user.saveData(userObj);
    moveToNextScreen();
  }


  if (initializing || fullLoading)
    return <AppLoader />


  const onSubmit = data => {
    const {
      Email,
      Password
    } = data;
    setThisData(1, Email, Password, '');
  };

  function setThisData(status, email, password, phone) {
    setData({ Status: status, Email: email, Password: password, Phone: phone });
  }

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', height: ScreenHeight * 0.9675, width: ScreenWidth }}>
        <LogoAndName />
        <AppText marginTop={27} text="Welcome back" size={24} />
        <AppText marginTop={3} text={"Login"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <LoginForm loading={loading} onForgotPasswordClick={onForgotPasswordClick} onSubmit={onSubmit} />
        <AppBTN onPress={onSkipClick} text={'Skip'} color={GLOBAL.Color.c3} marginTop={15} />
        <View style={{ marginTop: heightPixel(80), flexDirection: 'row' }}>
          <AppText text={"Don’t have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'} />
          <TouchableOpacity onPress={onSignUpClick}><AppText text={" Sign up"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'} /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}