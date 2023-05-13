import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import user from '../../user';

const initialState = {
  count: 0,
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
}

export const loginAPI = createAsyncThunk('loginAPI', async () => {
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
  return data;
})

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incByAmount: (state, action) => {
      state.count += action.payload
    }
  },
  extraReducers: {
    [getAPI.pending]: (state) => {
      state.isLoading = true;
    },
    [getAPI.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.count = payload;
    },
    [getAPI.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload
    }
  }
})

export const { increment, decrement, incByAmount } = loginSlice.actions;
export default loginSlice.reducer;
