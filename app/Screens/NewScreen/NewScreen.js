import React from 'react'
import { View } from 'react-native'
import { AppText, AppBTN } from '../Common/';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, incByAmount, getAPI } from "../../redux/slices";

export default function NewScreen() {
  // const countState = useSelector(state => state.counter);
  // const dispatch = useDispatch();

  // const Increament = () => { dispatch(increment()); }
  // const IncByAmount = (amount) => { dispatch(incByAmount(amount)); }
  // const GetAPI = () => { dispatch(getAPI()); }
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <AppText text={"Here:" + countState.count} size={29} />
  //     <AppBTN marginTop={20} text={'inc'} onPress={Increament} />
  //     <AppBTN marginTop={20} text={'incByVal'} onPress={() => IncByAmount(5)} />
  //     <AppBTN marginTop={20} text={'GetAPI'} onPress={() => GetAPI()} />
  //   </View>
  // );
}