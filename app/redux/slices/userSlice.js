import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const initialState = {
  userObj: '',
  count: 0,
}

export const loadData = createAsyncThunk('loadData', async () => {
  let data = JSON.parse(await AsyncStorage.getItem('user'));
  return data;
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }, extraReducers: {
    [loadData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userObj = payload;
    }
  }
})

export const { } = userSlice.actions;
export default userSlice.reducer;