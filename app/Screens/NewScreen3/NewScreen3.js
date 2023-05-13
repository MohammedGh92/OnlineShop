import React, { useEffect } from 'react'
import { View } from 'react-native'
import { AppText, AppBTN } from '../Common/';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from "../../redux/slices/userSlice";

export default function NewScreen3() {

  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  const LoadData = () => { dispatch(loadData()); }

  console.log('userState:' + JSON.stringify(userState));
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText text={"Here:" + userState.count} size={29} />
      <AppBTN marginTop={20} text={'tst'} onPress={() => LoadData()} />
    </View>
  );
}

// import React from 'react'
// import { View } from 'react-native'
// import { AppText, AppBTN } from '../Common/';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadData } from "../../redux/slices/userSlice";

// export default function NewScreen3() {
//   const countState = useSelector(state => state.user);
//   const dispatch = useDispatch();

//   const Increament = () => { dispatch(increment()); }
//   const IncByAmount = (amount) => { dispatch(incByAmount(amount)); }
//   const GetAPI = () => { dispatch(getAPI()); }
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <AppText text={"Here:" + countState.count} size={29} />
//       <AppBTN marginTop={20} text={'inc'} onPress={Increament} />
//       <AppBTN marginTop={20} text={'incByVal'} onPress={() => IncByAmount(5)} />
//       <AppBTN marginTop={20} text={'GetAPI'} onPress={() => GetAPI()} />
//     </View>
//   );
// }